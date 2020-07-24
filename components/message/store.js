//const db = require('mongoose');
// db.Promise = global.Promise
// db.connect('mongodb://user:user', {useNewUrlParser: true}) 
//const MoongoLib = require('../lib/mongo');
//const collection = 'movies'
//const mongoDB = new MongoLib();
const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save();
}
async function getMessage(){
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage,
}