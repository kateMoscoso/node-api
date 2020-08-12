'use strict';
const MongoLib = require('../../../lib/mongo');
const collection = 'students';
const mongoDB = new MongoLib();

const getPeople = async () => {
  const students = await mongoDB.getAll(collection, '');
  return students;
};

const getPerson = async (root, args) => {
  const student = await mongoDB.get(collection, args.id);
  return student;
};

module.exports = {
  getPeople,
  getPerson,
};
