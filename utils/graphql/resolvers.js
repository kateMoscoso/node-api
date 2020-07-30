"use strict";

const courses = [
  {
    _id: "java",
    title: "Mi titulo",
    teacher: "Daniel Perez",
    description: "una descripcion",
    topic: "microservicios",
  },
  {
    _id: "cloud",
    title: "Cloud Master",
    teacher: "Aitor Magan",
    description: "una descripcion",
    topic: "aws",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.find(course => course._id === args.id)
      return course
    }
  }
};
