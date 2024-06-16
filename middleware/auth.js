const User = require("../database/models/Users");
const { setCookie } = require("../modules/cookieManager");
const sendOtp = require("../modules/optSender/optSender");

async function auth(req, res, next) {
  if (req.params.apiKey) {
    const user = await User.findOne({ api_key: req.params.apiKey });
    if (!user) {
      res.send({
        msg: "API key is Invalid!",
      });
    } else {
      if (user.isVerified == false) {
        const otp = await sendOtp(user.email);
        setCookie(user.email, otp);
        res.send({
          msg: "User is not verified! We have sent you an email with a verification link.",
        });
      } else {
        next();
      }
    }
  } else {
    res.send({
      msg: "Please provide a API key.",
    });
  }
}

module.exports = auth;
