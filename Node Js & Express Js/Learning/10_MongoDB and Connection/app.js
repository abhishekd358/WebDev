import express from "express";

// import the mongoose Library
import mongoose from "mongoose";

// connection Express Js app With MongoDB
mongoose
  .connect(
    "mongodb+srv://<email>:<password>@cluster0.wuxv9he.mongodb.net/",
    { dbName: "MyDB" }
  )
  .then(() => console.log("Successfully Connect with Database..."))
  .catch((error) => console.log(error));

const app = express();

const port = 1111;
app.listen(port, () => console.log("Running Server on Port", port));
