require('dotenv').config();

const config = {
  db: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.PORT || 3000,
    uriDb: process.env.URI,
  },
  api: {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
  },
  jwt: {
    secret: process.env.SECRET,
  },
  cryptoKey: process.env.CRYPTO_KEY,
  cryptoAlgo: process.env.CRYPTO_ALGO,
  iv: process.env.IV,
};

module.exports = { config };
