'use strict';

class Footer {

    constructor(){

        this.about = element(by.css('.rtm-footer-nav a[href="/about/"]'));
        this.jobs = element(by.css('.rtm-footer-nav a[href="/about/jobs.rtm"]'));
        this.press = element(by.css('.rtm-footer-nav a[href="/about/press.rtm"]'));
        // this.blog = element(by.css('.rtm-footer-nav a[href="http://blog.rememberthemilk.com/"]'));

        this.tour = element(by.css('.rtm-footer-nav a[href="/tour/"]'));
        this.news = element(by.css('.rtm-footer-nav a[href="/new/"]'));
        this.download = element(by.css('.rtm-footer-nav a[href="/services/"]'));
        this.integrations = element(by.css('.rtm-footer-nav a[href="/integrations/"]'));
        this.upgrade = element(by.css('.rtm-footer-nav a[href="/upgrade/"]'));

        this.forums = element(by.css('.rtm-footer-nav a[href="/forums/"]'));
        this.testers = element(by.css('.rtm-footer-nav a[href="/services/tester/"]'));
        this.dairy = element(by.css('.rtm-footer-nav a[href="/dairy/"]'));
        this.translations = element(by.css('.rtm-footer-nav a[href="/services/translate/"]'));
        this.api = element(by.css('.rtm-footer-nav a[href="/services/api/"]'));

        this.help = element(by.css('.rtm-footer-nav a[href="/help/"]'));
        this.start = element(by.css('.rtm-footer-nav a[href="/help/guide/"]'));
        this.tips = element(by.css('.rtm-footer-nav a[href="/help/tips/"]'));
        // this.status = element(by.css('.rtm-footer-nav a[href="http://status.rememberthemilk.com/"]'));
        this.contact = element(by.css('.rtm-footer-nav a[href="/help/contact/"]'));
    };
}

module.exports = Footer;