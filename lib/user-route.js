'use strict';

var express = require('express');

// This module is incomplete right now, but we can still
// code and test without it. Hooray!
var users = require('./users');

module.exports = function (app) {
  var route = express.Router();

  // Mount route as "/users"
  app.use('/users', route);

  // Add a route that allows us to get a user by their username
  route.get('/:username', function (req, res) {
    var user = users.getByUsername(req.params.username);

    if (!user) {
      res.status(404).json({
        status: 'not ok',
        data: null
      });
    } else {
      res.json({
        status: 'ok',
        data: user
      });
    }
  });
};
