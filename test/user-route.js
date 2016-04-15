'use strict'

// We'll use this to override require calls in routes
var proxyquire = require('proxyquire');
// This will create stubbed functions for our overrides
var sinon = require('sinon');
// Supertest allows us to make requests against an express object
var supertest = require('supertest');
// Natural language-like assertions
var expect = require('chai').expect;

var express = require('express');

describe('GET /ping', function () {
  var app, getUserStub, request, route;

  beforeEach(function () {
    // A stub we can use to control conditionals
    getUserStub = sinon.stub();

    // Create an express application object
    app = express();

    // Get our router module, with a stubbed out users dependency
    // we stub this out so we can control the results returned by
    // the users module to ensure we execute all paths in our code
    route = proxyquire('../lib/user-route.js', {
      './users': {
        getByUsername: getUserStub
      }
    });

    // Bind our application to
    route(app);

    // Get a supertest instance so we can make requests
    request = supertest(app);
  });

  it('should respond with a 404 and a null', function (done) {
    getUserStub.returns(null);

    request
      .get('/users/nodejs')
      .expect('Content-Type', /json/)
      .expect(404, function (err, res) {
        expect(res.body).to.deep.equal({
          status: 'not ok',
          data: null
        });
        done();
      });
  });

  it('should respond with 200 and a user object', function (done) {
    var userData = {
      username: 'nodejs'
    };

    getUserStub.returns(userData);

    request
      .get('/users/nodejs')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        expect(res.body).to.deep.equal({
          status: 'ok',
          data: userData
        });
        done();
      });
  });
});
