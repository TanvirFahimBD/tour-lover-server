const express = require("express");
const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//! middleware
app.use(cors());
app.use(express.json());

//! server get
app.get("/", (req, res) => {
  res.send("Hello Tour Lover Server");
});

//! server listen
app.listen(port, () => {
  console.log(`listening at port`, port);
});
