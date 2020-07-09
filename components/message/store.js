const db = require('mongoose');


function addMessage(message) {
    list.push(message);
}
function getMessage(){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage,
}