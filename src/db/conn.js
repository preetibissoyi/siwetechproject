const e = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully!");
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("DB is not connected:", error);
  });


  