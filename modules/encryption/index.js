const bcrypt = require("bcrypt");

function encrypt(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12).then((salt) => {
      bcrypt
        .hash(password, salt)
        .then((hash) => {
          resolve(hash);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }).catch((err) => {
    console.error(err);
  });
}

module.exports = encrypt;
