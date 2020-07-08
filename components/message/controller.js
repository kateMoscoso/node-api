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
    resolve(fullMessage);
  });
}
module.exports = {
  addMessage,
};
