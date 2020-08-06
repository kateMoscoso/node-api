'use strict';
const studentsQueries = require('./queries/students')
const coursesQueries = require('./queries/courses')

module.exports = {
  ...coursesQueries,
  ...studentsQueries
};
