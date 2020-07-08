const express = require('express');

const router = express.Router();

router.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

router.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

router.get('/api/post/:year/:month', (req, res) => {
  // req.query
  res.send(req.params);
});
