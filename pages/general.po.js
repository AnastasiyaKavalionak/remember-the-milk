'use strict';

const Settings = require('./settings.po');

class General extends Settings{

    constructor() {

        super();

        this.startView = element.all(by.css('.b-Rj-Dj-ij-n div'));

        this.list = element.all(by.css('.b-Rj-Dj-Z-n.Rm-Fp-Gp.Rm-Eo-Sm-i'));
        this.dueDate = element.all(by.css('.b-Rj-Dj.b-Rj-Dj-Xj .b-Rj-Dj-um-n.Rm-Fp-Gp.Rm-Eo-Sm-i'));
        this.sort = element.all(by.css('.b-Rj-Dj-he-n.Rm-Fp-Gp.Rm-Eo-Sm-i'));
        this.fields = element.all(by.css('.b-Rj-Dj-bt-er > span'));

        this.detection.on = element(by.css('.b-Rj-Dj-aq.b-Rj-Dj-um-Pt-Li-aq'));
        this.detection.off = element(by.css('.b-Rj-Dj-aq.b-Rj-Dj-um-Pt-hb-aq'));

        this.addresses.on = element(by.css('.b-Rj-Dj-aq.b-Rj-Dj-Yj-Li-aq'));
        this.addresses.off = element(by.css('.b-Rj-Dj-aq.b-Rj-Dj-Yj-hb-aq'));
        this.resetUrls = element(by.css('.b-Rj-Dj-Yj-Zj'));

        this.channel = element.all(by.css('.b-Rj-Dj-channel-n div'));

        this.save = element(by.css('.b-Rj-Dj.b-Rj-Dj-Xj button'));
    }
}

module.exports = General;