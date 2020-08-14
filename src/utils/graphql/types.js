'use strict';
const MongoLib = require('../../store/mongo');
const { ObjectID } = require('mongodb');
const collection = 'students';
const mongoDB = new MongoLib();

const people = async ({ people }) => {
  const ids = people ? people.map(id => ObjectID(id)) : [];
  const peopleData = ids.length > 0 ?
    await mongoDB.getAll(collection, { _id: { $in: ids } }) :
    [];
  return peopleData;
}
const personResolveType = (person, context, info) => {
  if (person.phone) {
    return 'Monitor'
  }
  return 'Student'
}

const globalSearchResolveType = (item, context, info) => {
  if (item.title) {
    return 'Course';
  } else if (item.phone) {
    return 'Monitor';
  }
  return 'Student'
}

module.exports = {
  Course: {
    people
  },
  Person: {
    __resolveType: personResolveType
  },
  GlobalSearch: {
    __resolveType: globalSearchResolveType

  }
}
