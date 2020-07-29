'use strict'

const courses = [
  {
    _id: 'Daniel Perez',
    title: 'Mi titulo',
    teacher: 'Java',
    description: 'una descripcion',
    topic: 'microservicio]'
  },
  {
    _id: 'Aitor Magan',
    title: 'Cloud Master',
    teacher: 'Cloud',
    description: 'una descripcion',
    topic: 'aws'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}