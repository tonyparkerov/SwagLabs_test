export default class Footer {
    constructor(page) {
        this.page = page;
        this.twitterLogo = page.locator('a[data-test="social-twitter"]');
        this.facebookLogo = page.locator('a[data-test="social-facebook"]');
        this.linkedinLogo = page.locator('a[data-test="social-linkedin"]');
        this.footerCopy = page.locator('div[data-test="footer-copy"]');
    }
}