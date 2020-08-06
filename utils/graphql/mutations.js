'use strict';
const MongoLib = require('../../lib/mongo');
const { ObjectID } = require('mongodb');
const collection = 'courses';
const mongoDB = new MongoLib();

const createCourse = async (root, { input }) => {
  const defaults = {
    teacher: '',
    topic: '',
  };

  const newCourse = Object.assign(defaults, input);
  const id = await mongoDB.create(collection, newCourse);
  newCourse._id = id
  return newCourse;
};

const createStudent = async (root, { input }) => {
  const id = await mongoDB.create('students', input);
  input._id = id
  return input;
};

const editCourse = async (root, { _id, input }) => {
  await mongoDB.update(collection, _id, input)
  const course = await mongoDB.get(collection, _id)
  return course;
}

const editStudent = async (root, { _id, input }) => {
  await mongoDB.update('students', _id, input)
  const student = await mongoDB.get('students', _id)
  return student;
}
const addPeople = async (root, { courseID, personID }) => {
  const student = await mongoDB.get('students', personID)
  const course = await mongoDB.get(collection, courseID)
  if (!student || !course) {
    throw new Error('The student or the course do not exist')
  }

  await mongoDB.updateQuery(collection, courseID, { $addToSet: { people: ObjectID(personID) } })
  return course;
}
module.exports = {
  createCourse,
  createStudent,
  editCourse,
  editStudent,
  addPeople
};
