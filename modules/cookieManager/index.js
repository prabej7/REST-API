const setter = new Map();

function setCookie(email, otp, expirationMinutes = 5) {
  const expirationTime = Date.now() + expirationMinutes * 60 * 1000;
  setter.set(email, { otp, expirationTime, isVerified: false });
  return "OK";
}

function otpChecker(email, user_otp) {
  const storedData = setter.get(email);

  if (!storedData) {
    return "OTP expired or email not found";
  }

  const { otp, expirationTime, isVerified } = storedData;

  if (Date.now() > expirationTime) {
    setter.delete(email); // Cleanup expired OTP
    return "OTP expired";
  } else if (user_otp === otp) {
    return {result:"verified", email: email};
  } else {
    return "OTP is incorrect!";
  }
}

module.exports = {
  setCookie,
  otpChecker,
};
