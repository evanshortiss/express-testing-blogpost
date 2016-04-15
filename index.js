'use strict';

var PORT = 3001;

var userRoute = require('./lib/user-route');
var app = require('express')();

// Bind users route to our application
userRoute(app);

app.listen(PORT, function () {
  console.log('listening on port %s', PORT);
});
