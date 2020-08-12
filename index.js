const express = require('express');
const app = express();
const server = require('http').Server(app);

const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./src/routes/routes');
const { config } = require('./src/config');
const moviesApi = require('./src/components/movies/routes');
const graphql = require('./src/utils/graphql/index.js');
const db = require('./src/lib/db');
const socket = require('./socket');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 3000;
const {
  logErrors,
  errorHandler
} = require('./src/utils/middlewares/errorHandlers.js');

db(config.db.uriDb);

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);
moviesApi(app);
graphql(app);

const swaggerDoc = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

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

app.use(config.api.publicRoute, express.static('public'));
server.listen(port, () => debug(`Listening port ${chalk.green(port)}`));
