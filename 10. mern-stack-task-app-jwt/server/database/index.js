const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sangammukherjee2022:sangammukherjee2023@cluster0.fiyruuq.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
