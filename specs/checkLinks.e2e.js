'use strict';

const EC = protractor.ExpectedConditions;
const Master = require('../pages/master.po');
const list = require('../data/listOfTitles');
const Reporter = require('../reporter/reporter');

let master = new Master();

describe('checking links ', () => {
    beforeAll(() => {
        helper.browserHelper.openPage(master.url);
    });

    logger.info('checking links');
    for (let link in list.footer) {
        it(`${link} from footer`, () => {
            logger.info(`${link} from footer`);
            helper.scrollAndWaitAndClickAndWaitTitleIs(master.footer[link], true, list.footer[link]);
        });
    }

    for (let link in list.header) {
        it(`${link} from header`, () => {
            logger.info(`${link} from footer`);
            helper.scrollAndWaitAndClickAndWaitTitleIs(master.header[link], false, list.header[link]);
        });
    }

});