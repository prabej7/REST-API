const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/REST")
    .then(() => {
      console.log("Database connected !");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = connect;
