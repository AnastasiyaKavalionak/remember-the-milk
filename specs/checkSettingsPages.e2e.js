'use strict';

const Login = require('../pages/login.po');
const Header = require('../pages/header.tasks.po');
const General = require('../pages/general.po');

const login = new Login();
const header = new Header();
const general = new General();

describe('checking login page ', () => {
    beforeAll(() => {
        helper.browserHelper.openPage(login.url);
        helper.setTextInputValue('TestLogin5', login.username);
        helper.setTextInputValue('Test12345', login.password);
        helper.scrollAndWaitAndClick(header.settings, false);
        helper.scrollAndWaitAndClick(general.account, false);
    });

    logger.info('checking settings pages ');
    it('checking general page ', () => {
        logger.info('checking general page');

    });

});