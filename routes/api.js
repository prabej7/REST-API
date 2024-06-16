const { Router } = require("express");
const auth = require("../middleware/auth");

const api = Router();

api.get("/:apiKey", auth, (req, res) => {
  res.send({
    msg: "Authenticated!",
  });
});

module.exports = api;
