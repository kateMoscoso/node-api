const express = require('express');
const app = express();
const server = require('http').Server(app);

const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const graphql = require('./utils/graphql/index.js');
const db = require('./db');
const socket = require('./socket');

const port = process.env.PORT || 3000;
const {
  logErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers.js');

db(config.uriDb);

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);
moviesApi(app);
graphql(app);

app.use(morgan('combined'));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')));

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/index.html')
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use(logErrors);
app.use(errorHandler);

app.use(config.publicRoute, express.static('public'));
server.listen(port, () => debug(`Listening port ${chalk.green(port)}`));
