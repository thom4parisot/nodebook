'use strict';

const routes = require('express').Router();
const Users = require('./lib/models/users.js');

const findByUserId = (req, res, next) => {
  Users.findOneBy('id', req.param('user_id'))
    .on('data', user => {
      res.locals.user = user;

      next();
    })
    .on('error', () => next(new Error('Unknown user identifier.')));
};

routes.get('/:user_id', findByUserId, (req, res) => {
  res.render('user_profile');
});

module.exports = routes;
