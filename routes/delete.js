const { Router } = require("express");
const User = require("../database/models/Users");
const auth = require("../middleware/auth");

const route = Router();
route.delete("/:apiKey", auth, async (req, res) => {
  try {
    await User.deleteOne({ api_key: req.params.apiKey });
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
