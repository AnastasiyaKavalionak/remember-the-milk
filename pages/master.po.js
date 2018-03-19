'use strict';

const Header = require('./header.po');
const Footer = require('./footer.po');

class Master {

    constructor() {

        this.url = 'https://www.rememberthemilk.com/';
        this.header = new Header();
        this.footer = new Footer();
    };
}

module.exports = Master;