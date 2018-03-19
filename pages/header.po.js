'use strict';

class Header {

    constructor() {

        this.logo = element(by.css('.container > .rtm-top-nav-logo-white'));

        this.tour = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/tour/"]'));
        this.news = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/new/"]'));
        this.upgrade = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/upgrade/"]'));
        this.help = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/help/"]'));
        this.login = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/login/"]'));
        // this.signup = element(by.css('.nav.navbar-nav.navbar-right.hidden-xs a[href="/signup/"]'));
    };
}

module.exports = Header;