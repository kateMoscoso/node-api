var fs = require('fs');
var https = require('https');
var path = require('path');
const { config } = require('process');

var httpsOption = {
    key: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/server.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/server.crt"))
}

https.createServer(httpsOption, app).listen(config.port, function(){
    console.log("")
})