'use strict';

class Settings {

    constructor() {

        this.account = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(1)'));
        this.password = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(2)'));
        this.general = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(3)'));
        this.contacts = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(4)'));
        this.daily = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(5)'));
        this.reminders = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(6)'));
        this.notifications = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(7)'));
        this.emails = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(8)'));
        this.milkSync = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(9)'));
        this.themes = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(10)'));
        this. apps = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(11)'));
        this.import = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(12)'));
        this.export = element(by.css('.Rm-Nn-Tc-K div:nth-of-type(13)'));

        this.title = element(by.css('.b-Rj-e-Bn-In'));
        this.close = element(by.css('.b-Rj-e-In-cb'));
    }
}

module.exports = Settings;