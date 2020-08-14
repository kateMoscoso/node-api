const mongoose = require('mongoose');

async function connect(url) {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

module.exports = connect;
