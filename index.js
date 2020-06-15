const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// middlewares

app.use(morgan('combined'));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')));

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/index.html')
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/post/:year/:month', (req, res) => {
  // req.query
  res.send(req.params);
});

app.listen(port, () => debug(`Listening port ${chalk.green(port)}`));
// export PORT 5000
