'use strict';
const studentsQueries = require('./queries/students')
const coursesQueries = require('./queries/courses')
const MongoLib = require('../../store/mongo');
const mongoDB = new MongoLib();

const searchItems = async (root, { keyword }) => {
  let items
  let courses
  let people

  try {
    courses = await mongoDB.getAll('courses', { $text: { $search: keyword } })
    people = await mongoDB.getAll('students', { $text: { $search: keyword } })
    items = [...courses, ...people]
  } catch (error) {
    console.log(error)
  }

  return items
}

module.exports = {
  ...coursesQueries,
  ...studentsQueries,
  searchItems
};
