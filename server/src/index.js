const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductRouter = require("./router/product.route");
const UserRouter = require("./router/User.router");

dotenv.config();
const app = express();
const mongodb_url =
  process.env.MONGO_URL || "mongodb://localhost:27017/tata1mg";
const PORT = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Product Route
app.use("/products", ProductRouter);

//User Route
app.use("/user", UserRouter);

mongoose.connect(mongodb_url).then(() => {
  app.listen(PORT, () => {
    console.log("server is started on port " + PORT);
  });
});
