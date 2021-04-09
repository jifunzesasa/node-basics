let crypto = require("crypto");

const decrypt = (encrypted, password) => {
  const algorithm = "aes-192-cbc";

  const key = crypto.scryptSync(password, "salt", 24);
  const iv = Buffer.alloc(16, 0); // Initialization vector.

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = "";
  decipher.on("readable", () => {
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString("utf8");
    }
  });

  decipher.on("end", () => {
    console.log(decrypted);
  });

  decipher.write(encrypted, "hex");
  decipher.end();
};

module.exports = decrypt;
