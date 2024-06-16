const { Router } = require("express");
const checkFields = require("../middleware/checkFields");
const { otpChecker } = require("../modules/cookieManager");
const User = require("../database/models/Users");
const { generate } = require("otp-generator");
const API = require("../database/models/API");
const route = Router();

route.get("/:email/:otp", async (req, res) => {
  const { email, otp } = req.params;
  const response = otpChecker(email, otp);
  const user = await User.findOne({ email: email });

  if (response.result == "verified") {
    await User.updateOne({ email: email }, { $set: { isVerified: true } });

    const user = await User.findOne({ email: email });
    const responseData = {
      isVerified: true,
      user: email,
      api_key: user.api_key,
    };
    res.send(responseData);
  } else {
    const user = await User.findOne({ email: email });

    if (user.isVerified == true) {
      res.send({
        isVerified: user.isVerified,
        user: user.email,
        api_key: user.api_key,
      });
    } else {
      res.send({
        isVerified: user.isVerified,
        user: user.email,
        msg: "Either the email is not registered or OTP is expired!",
      });
    }
  }
});

module.exports = route;
