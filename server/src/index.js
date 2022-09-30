const express=require('express')
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const ProductRouter = require('./router/product.route');
dotenv.config();
const app=express()
app.use(cors())
const mongodb_url = process.env.MONGO_URL||"mongodb://localhost:27017/tata1mg"
const PORT = process.env.PORT
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Product Route
app.use("/products",ProductRouter)



mongoose.connect(mongodb_url).then(() => {
   
    app.listen(PORT, () => {
      console.log("server is started on port " + PORT);
    });
  });