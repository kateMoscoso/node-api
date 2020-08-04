const mongoose = require('mongoose');

//db.Promise = global.Promise;

async function connect(url) {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  debug('[db] Conectada con éxito');
}

module.exports = connect;
