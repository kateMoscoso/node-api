'use strict';
const MongoLib = require('../../../store/mongo');
const collection = 'courses';
const mongoDB = new MongoLib();

const getCourses = async () => {
  const courses = await mongoDB.getAll(collection, '');
  return courses;
};

const getCourse = async (root, args) => {
  const course = await mongoDB.get(collection, args.id);
  return course;
};

module.exports = {
  getCourses,
  getCourse,
};
