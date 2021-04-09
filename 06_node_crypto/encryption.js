let crypto = require("crypto");

const encrypt = (value, password) => {
  const algorithm = "aes-192-cbc";

  crypto.scrypt(password, "salt", 24, (err, key) => {
    if (err) throw err;

    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let encrypted = "";
      cipher.setEncoding("hex");

      cipher.on("data", (chunk) => (encrypted += chunk));
      cipher.on("end", () => console.log(encrypted));

      cipher.write(value);
      cipher.end();
    });
  });
};

module.exports = encrypt;
