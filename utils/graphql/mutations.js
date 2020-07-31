"use strict";
const MongoLib = require("../../lib/mongo");
const collection = "courses";
const mongoDB = new MongoLib();

const createCourse = async (root, { input }) => {
  const defaults = {
    teacher: "",
    topic: "",
  };

  const newCourse = Object.assign(defaults, input);
  const course = await mongoDB.create(collection, newCourse);
  newCourse._id = course.insertedId
  return newCourse;
};

module.exports = {
  createCourse,
};
