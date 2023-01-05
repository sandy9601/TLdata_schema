const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./src/routes/route");
const app=express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const multer= require("multer");
app.use( multer().any())

mongoose
  .connect(
    "mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net/TLtech?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )

  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);


app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});

