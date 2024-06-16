const bctypt = require("bcrypt");
const { Router } = require("express");
const checkField = require("../middleware/checkFields");
const sendOtp = require("../modules/optSender/optSender");
const { setCookie } = require("../modules/cookieManager");
const User = require("../database/models/Users");
const encrypt = require("../modules/encryption");
const { generate } = require("otp-generator");
const API = require("../database/models/API");

const register = Router();

register.post("/", checkField, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      const isVerified = false;

      const otp = await sendOtp(email);
      setCookie(email, otp);
      const encryptedPassword = await encrypt(password);
      const api_key = generate(12);
      const newUser = new User({
        username: username,
        email: email,
        password: encryptedPassword,
        api_key: api_key,
      });

      const newapi = new API({
        apiKey: api_key,
      });

      await newapi.save();

      await newUser.save();

      res.send(
        `We sent you a email at ${email} with a link to verify its you!`
      );
    } else {
      console.log(user);
      res.send("User already exists!");
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = register;
