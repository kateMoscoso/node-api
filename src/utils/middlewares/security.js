const crypto = require('crypto');
const config = require('../../config/index.js');

const createIV = function () {
  return crypto.randomBytes(16);
};

const encrypt = function (toEncrypt) {
  config.iv = createIV();
  config.cryptoKey = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv(
    config.cryptoAlgo,
    config.cryptoKey,
    config.iv
  );

  return cipher.update(toEncrypt, 'utf8', 'hex') + cipher.final('hex');
};

const decrypt = function (toDecrypt) {
  const decipher = crypto.createDecipher(
    config.cryptoAlgo,
    config.cryptoKey,
    config.iv
  );
  return decipher.update(toDecrypt, 'hex', 'utf8') + decipher.final('utf8');
};

module.exports = { encrypt, decrypt };
