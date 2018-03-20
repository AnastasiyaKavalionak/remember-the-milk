'use strict';

const Login = require('../pages/login.po');

const login = new Login();

describe('checking login page ', () => {
    beforeAll(() => {
        helper.browserHelper.openPage(login.url);
    });

    logger.info('checking login page ');
    it('checking log in ', () => {
        logger.info('checking log in');
        helper.setTextInputValue(login.username,'TestLogin5');
        helper.setTextInputValue(login.password, 'Test12345');
        helper.scrollAndWaitAndClickAndWaitTitleIs(login.login, false,'All Tasks - Remember The Milk');
    });

});