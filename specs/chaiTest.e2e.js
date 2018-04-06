'use strict';

const EC = protractor.ExpectedConditions;
const Master = require('../pages/master.po');
const list = require('../data/listOfTitles');
const Reporter = require('../reporter/reporter');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;


let master = new Master();

fdescribe('checking links ', () => {
    beforeAll(() => {
        helper.browserHelper.openPage(master.url);
    });

    logger.info('checking links');
    for (let link in list.footer) {
        it(`${link} from footer`, () => {
            logger.info(`${link} from footer`);
            helper.scrollAndWaitAndClick(master.footer[link], true);
            expect(browser.getTitle()).to.eventually.eql(list.footer[link]);
        });
    }
});