const { spawn } = require("node:child_process");
const { generate } = require("otp-generator");

function sendOtp(email) {
  return new Promise((resolve, reject) => {
    const otp = generate(6);
    const pythonProcess = spawn("python", [
      "./modules/SMTP/main.py",
      email,
      otp,
    ]);

    let receivedData = "";

    pythonProcess.stdout.on("data", (data) => {
      receivedData += data;
    });

    pythonProcess.stderr.on("data", (err) => {
      receivedData += err;
    });

    pythonProcess.on("close", (code) => {
      if (code == 0) {
        resolve(otp);
      } else {
        reject(otp);
      }
    });
  });
}

module.exports = sendOtp;
