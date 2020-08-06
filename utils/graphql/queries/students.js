'use strict';
const MongoLib = require('../../../lib/mongo');
const collection = 'students';
const mongoDB = new MongoLib();

const getStudents = async () => {
  const students = await mongoDB.getAll(collection, '');
  return students;
};

const getStudent = async (root, args) => {
  const student = await mongoDB.get(collection, args.id);
  return student;
};

module.exports = {
  getStudents,
  getStudent,
};
