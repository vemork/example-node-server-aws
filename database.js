import mongoose from "mongoose";

const uri = "mongodb://my_user:my_pwd@localhost:27017/mern";
const options = {};

mongoose
  .connect(uri, options)
  .then((data) => {
    // console.log('data :>> ', data);
    // console.log("Database connected ");
  })
  .catch((err) => console.log("err :>> ", err));

//mongo
// show databases = show dbs
// use test (database name)
// show collections
// db.Users.find()
// db.dropDatabase()