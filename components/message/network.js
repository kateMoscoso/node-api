const express = require('express');

const router = express.Router();
const response = require('../../network/response');

router.get('/message', (req, res) => {
  response.success(req, res, '');
});

module.exports = router;
