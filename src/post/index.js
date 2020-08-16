const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const post = require('./components/post/network');
const {
  logErrors,
  errorHandler
} = require('../utils/middlewares/errorHandlers');

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use('/api/post', post);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.post.port, () => {
  console.log('Servicio posts escuchando en el puerto ', config.post.port);
});
