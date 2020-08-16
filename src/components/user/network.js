const express = require('express');
const response = require('../../utils/middlewares/response');
//const controller = require('./controller');
const controller = require('./index');

const secure = require('./secure');
const router = express.Router();

// Routes
router.get('/', list);
router.post('/follow/:id', secure('follow'), follow);
router.get(':id/following', following);
router.get('/:id', get);
router.post('/', addUser);
router.put('/', secure('update'), upsert);

function list(req, res, next) {
  controller.listUsers(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
}

function addUser(req, res, next) {
  controller.addUser(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
}

function get(req, res, next) {
  controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
}

function follow(req, res, next) {
  controller.follow(req.user.id, req.params.id)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(next);
}

function following(req, res, next) {
  controller.following(req.user.id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
