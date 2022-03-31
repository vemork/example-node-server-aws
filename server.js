import express  from "express";
import md5 from "md5";

import './database.js'
import  router  from "./Routes/routes.js";

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000);
// console.log("Server running on port 3000 :>> ");
