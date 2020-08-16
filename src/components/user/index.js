const store = require('../../store/mysql');
const ctrl = require('./controllerSql');

module.exports = ctrl(store);
