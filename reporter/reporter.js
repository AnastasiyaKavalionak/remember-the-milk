'use strict';

const fs = require('fs');
const shell = require('shelljs');

const myReporter = {

    dir: "",

    test: "",

    // jasmineStarted: function() { },

    // suiteStarted: function() { },

    // specStarted: function() { },

    specDone: function(result) {
        if (result.status === 'passed') {
            logger.info(`${result.description} is ${result.status}`);
        } else {
            logger.error(`${result.description} is ${result.status}`);
        }
    },

    // suiteDone: function() { },

    // jasmineDone: function() { }
};

module.exports = myReporter;