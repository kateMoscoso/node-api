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
  mysql: {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || '',
  },
  mysqlService: {
    port: process.env.MYSQL_SERVICE_PORT || 3001,
    host: process.env.MYSQL_SERVICE_HOST || 'localhost',
  },
  post: {
    port: process.env.POST_PORT || 3001,
    host: process.env.POST_HOST || 'localhost',
  },
};

module.exports = config ;
