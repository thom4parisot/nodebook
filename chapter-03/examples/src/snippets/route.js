'use strict';

var routes = require('express').Router();
var Users = require('../lib/models/users.js');

function findByUserId(req, res, next){
  Users
    .findOneBy('id', req.param('user_id'))
    .on('data', function(user){
      res.locals.user = user;

      next();
    })
    .on('error', function(err){
      next(new Error('Unknown user identifier.'));
    });
}

routes.get('/:user_id', findByUserId, function(req, res){
  res.render('user_profile');
});

module.exports = routes;
