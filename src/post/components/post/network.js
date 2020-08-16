const express = require('express');

const response = require('../../../utils/middlewares/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);

// functions
function list(req, res, next) {
  controller.list()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
