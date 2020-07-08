const express = require('express');

const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/message', (req, res) => {
  controller.getMessages()
  .then((messageList) =>{
    response.success(req, res, messageList, 200);
  })
  .catch(() => {})
  response.error(req, res, '', 500, '');
});

router.post('/', (req, res) => {
  controller.addMessage(req.body.user, req.body.message)
    .then(() => {
      response.success(req, res, 'Creado correctamentte', 201);
    }).catch((e) => {
      console.error(e);
      response.error(req, res, '', 400, 'error');
    });
  response.success(req, res, '');
});

module.exports = router;
