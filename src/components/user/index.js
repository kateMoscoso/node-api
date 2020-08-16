const store = require('../../store/remote-mysql');
const ctrl = require('./controllerSql');

module.exports = ctrl(store);
