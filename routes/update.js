const { Router } = require("express");
const auth = require("../middleware/auth");
const User = require("../database/models/Users");
const route = Router();

route.put("/:apiKey/:username", auth, async (req, res) => {
  try {
    await User.updateOne(
      { api_key: req.params.apiKey },
      { $set: { username: req.params.username } }
    );
    res.send({
      msg: "Username updated successfully!",
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = route;
