//const db = require('mongoose');
// db.Promise = global.Promise
// db.connect('mongodb://user:user', {useNewUrlParser: true})
//const MoongoLib = require('../lib/mongo');
//const collection = 'movies'
//const mongoDB = new MongoLib();
const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}
async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = filterUser;
  }
  const messages = await Model.find(filter);
  return messages;
}
async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
