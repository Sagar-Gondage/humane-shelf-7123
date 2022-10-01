const { Router } = require("express");
const UserModel = require("../model/user.model");

const UserRouter = Router();

UserRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, mobile, email } = req.body;

  const token = req.headers["authorization"].split(" ")[1];

  try {
    const userExist = await UserModel.findOne({ mobile: mobile });
    if (userExist) {
      return res.status(200).send({
        message: "User already exists..",
        status: true,
      });
    }
    const user = new UserModel({
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      token: token,
    });
    const newUser = await user.save();

    res.status(201).send({
      message: "User created successfully",
      userId: newUser._id,
      token: token,
    });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong", err });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { mobile } = req.body;
  const token = req.headers["authorization"]?.split(" ")[1];

  try {
    const userExist = await UserModel.findOne({ mobile: mobile });
    if (userExist == undefined) {
      return res
        .status(200)
        .send({ message: "User not found, Signup first", status: false });
    }
    const user = await UserModel.findOneAndUpdate(
      { mobile: mobile },
      { $set: { token: token } }
    );
    console.log(user);
    if (user) {
      return res.status(200).send({
        message: "User logged in successfully",
        userId: user._id,
        token: token,
      });
    } else {
      return res.status(500).send({ message: "Sometiong went wrong" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Sometiong went wrong", err });
  }
});

UserRouter.post("/logout/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $unset: { token: 1 } }
    );
    if (user) {
      res.status(200).send({ message: "Logged out successfully" });
    }
  } catch (err) {
    return res.status(404).send({ message: "Sometiong went wrong", err });
  }
});

UserRouter.get("/profile/:userId", async (req, res) => {
  const { userId } = req.params;
  const token = req.headers["authorization"]?.split(" ")[1];
  try {
    const user = await UserModel.findOne({ _id: userId, token: token });
    if (user) {
      res.status(200).send(user);
    }
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized", err });
  }
});

UserRouter.post("/cart/:id", async (req, res) => {
  try{
  const { id } = req.params;
  const newItem = req.body;
  
  const user = await UserModel.updateOne(
    { _id: id },
    { $set: { cart: newItem } }
  );
  res.status(200).send("Item added to the cart successfully");
  }catch(e){
    res.status(401).send("something wrong")
  }
});

UserRouter.get("/cart_empty/:id",async(req,res)=>{
  const { id } = req.params;
  try{
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { $unset: { cart: [] } }
    );
    res.status(200).send("cart empty")
  }catch(e){
   res.status(400).send(e)
  }
})
module.exports = UserRouter;
