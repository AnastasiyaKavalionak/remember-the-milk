'use script';

class Login {

    constructor() {

        this.url = 'https://www.rememberthemilk.com/login/';

        this.signup = element(by.css('.rtm-login-forgot'));

        this.username = element(by.css('#username'));
        this.password = element(by.css('#password'));
        this.stayLogin = element(by.css('.rtm-login-remember-label'));
        this.forgotPassword = element(by.css('.rtm-login-forgot'));
        this.login = element(by.css('#login-button'));
        this.facebook = element(by.css('.rtm-login-btn-facebook'));
        this.google = element(by.css('.rtm-login-btn-google'));
    }
}

module.exports = Login;