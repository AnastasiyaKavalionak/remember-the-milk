'use strict';

const log4js = require('log4js');

exports.config = {
    directConnect: true,
    baseUrl: 'https://www.rememberthemilk.com/',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-notifications', '--disable-infobars', '--window-size=1680,1050']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: ['./specs/*.e2e.js'],

    onPrepare: function () {
        log4js.configure({
            appenders: { e2e: { type: 'file', filename: './output/e2e.log' } },
            categories: { default: { appenders: ['e2e'], level: 'All' } }
        });
        global.EC = protractor.ExpectedConditions;
        global.helper = require('helper');
        global.logger = log4js.getLogger('e2e');
        browser.waitForAngularEnabled(true);
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};