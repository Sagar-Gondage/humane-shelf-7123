const { Router } = require("express");
const ProductModel = require("../model/product.model");
const ProductRouter = Router();

ProductRouter.get("/", async (req, res) => {
  let data = await ProductModel.find({});

  res.send({ data: data, message: "request successfull" });
});

ProductRouter.get("/data/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductModel.findById(id).exec();
    // console.log("datas", data);
    res.status(201).send({ data: data, message: "request successfull" });
  } catch (error) {
    res.status(404).json(error);
  }
});

let sortQuery = {
  rel: "",
  plth: { price: 1 },
  phtl: { price: -1 },
  rlth: { ratings: 1 },
  rhtl: { ratings: -1 },
};
ProductRouter.get("/filter", async (req, res) => {
  let { brand, sort, discount } = req.query;

  let data;
  if (brand) {
    brand = brand.split(",");
  }
  if (brand && sort && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && sort) {
    data = await ProductModel.find({
      brand: { $in: brand },
    }).sort(sortQuery[sort]);
  } else if (sort && discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand) {
    data = await ProductModel.find({
      brand: { $in: brand },
    });
  } else if (sort) {
    data = await ProductModel.find().sort(sortQuery[sort]);
  } else if (discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    });
  } else {
    data = await ProductModel.find();
  }

  res.send({ data: data, message: "filtered successfully" });
});

ProductRouter.get("/search", async (req, res) => {
  const que = req.query.q;
  console.log(que);
  try {
    let result = await ProductModel.find({});

    let ans = [];
    for (let i = 0; i < result.length; i++) {
      let str=result[i].productName.toLowerCase()
      if (str.includes(que)) {
        ans.push(result[i]);
      }
    }

    res.status(200).send(ans);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = ProductRouter;
