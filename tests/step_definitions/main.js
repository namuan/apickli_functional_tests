/* jshint node:true */
'use strict';

const apickli = require('apickli');
const { defineSupportCode, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(30 * 1000);
var env = process.env.NODE_ENV;
var environment;

switch (env) {
  case "development":
    environment = 'localhost:8080';
    break;
  default:
    environment = 'httpbin.org';
}

defineSupportCode(function ({ Before }) {
  Before(function () {
    this.apickli = new apickli.Apickli('http', environment);
  });
});

defineSupportCode(function ({ Given, When, Then }) {

  Given(/^I reset header (.*)$/, function (headerName, callback) {
    this.apickli.removeRequestHeader(headerName);
    callback();
  });

  Then(/^I wait for (\d+) seconds$/, { timeout: 10 * 60 * 1000 }, function (seconds, callback) {
    setTimeout(callback, seconds * 1000);
  });

});

module.exports = require('apickli/apickli-gherkin');