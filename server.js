import mongoose from "mongoose";
import express from "express";

import router from "./Routes/routes.js";

const app = express();
app.use(express.json());
app.use(router);

const uri = "mongodb://3.89.218.67/test";
const options = {};

mongoose
.connect(uri, options)
.then(() => {
  console.log("Database connected ");
})
.catch((err) => console.log("err :>> ", err));

app.listen(3000);
console.log("Server running on port 3000 :>> ");