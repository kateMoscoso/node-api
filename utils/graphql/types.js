'use strict';
const MongoLib = require('../../lib/mongo');
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

module.exports = {
  Course: {
    people
  }
}
