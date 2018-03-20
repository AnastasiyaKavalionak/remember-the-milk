'use strict';

class Header {

    constructor() {

        this.showMenu = element(by.css('.b-Eo-i.b-Mj-Nj-Oj-Cj-i.b-Mj-Nj-Oj-Cj-i-Ho-dq'));

        this.search = element(by.css('.Qm-om-Qm'));

        this.forOffline = element(by.css('.Rm-Fp-Gp.b-h-i'));
        this.notifications = element(by.css('.Rm-Fp-Gp.b-bk-i'));
        this.settings = element(by.css('.b-fo-Sm-i'));

        this.settingsList = element.all(by.css('.b-fo-Sm.b-fo-Sm-K .Rm-pn-Bn'));
    }
}

module.exports = Header;