import BaseComponent from "./BaseComponent";

export default class Footer extends BaseComponent {
    private twitterLogo = this.page.locator('a[data-test="social-twitter"]');
    private facebookLogo = this.page.locator('a[data-test="social-facebook"]');
    private linkedinLogo = this.page.locator('a[data-test="social-linkedin"]');
    private footerCopy = this.page.locator('div[data-test="footer-copy"]');

    async openSocialMedia(socialMediaName: string) {
        const pagePromise = this.context.waitForEvent('page');
        switch (socialMediaName) {
            case 'twitter':
                await this.twitterLogo.click();
                break;
            case 'facebook':
                await this.facebookLogo.click();
                break;
            case 'linkedin':
                await this.linkedinLogo.click();
                break;
            default:
                console.log('Wrong social media name given')
                break;
        }
        const newPage = await pagePromise;
        return newPage;
    }

    async getFooterCopy() {
        return this.footerCopy;
    }
}