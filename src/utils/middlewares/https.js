const fs = require('fs');
const https = require('https');
const path = require('path');
const { config } = require('process');

const httpsOption = {
  key: fs.readFileSync(path.resolve(__dirname, './artifacts/cert/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './artifacts/cert/server.crt'))
}

https.createServer(httpsOption, app).listen(config.api.port, function () {
  //console.log('')
})
