const store = require('./store');
const { list } = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      return reject();
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    store.add(fullMessage)
    resolve(fullMessage);
  });
}
function getMessages () {
    return new Promise((resolve, reject) => {
        resolve(list)
    })
}

module.exports = {
  addMessage,
  getMessages,
};
