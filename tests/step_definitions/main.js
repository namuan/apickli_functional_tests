/* jshint node:true */
'use strict';

const apickli = require('apickli');
const { Before, Given, Then, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(30 * 1000);
var env = process.env.NODE_ENV;
var environment;

switch (env) {
  case "development":
    environment = 'localhost:8000';
    break;
  default:
    environment = 'httpbin.org';
}

Before(function () {
  this.apickli = new apickli.Apickli('https', environment);
  this.apickli.addRequestHeader('User-Agent', 'apickli/2.3.3');
});

Given(/^I reset header (.*)$/, function (headerName, callback) {
  this.apickli.removeRequestHeader(headerName);
  callback();
});

Then(/^I wait for (\d+) seconds$/, { timeout: 10 * 60 * 1000 }, function (seconds, callback) {
  setTimeout(callback, seconds * 1000);
});

module.exports = require('apickli/apickli-gherkin');