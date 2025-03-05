import { step } from "../misc/step";
import BaseComponent from "./BaseComponent";

export default class Footer extends BaseComponent {
    private twitterLogo = this.page.locator('a[data-test="social-twitter"]');
    private facebookLogo = this.page.locator('a[data-test="social-facebook"]');
    private linkedinLogo = this.page.locator('a[data-test="social-linkedin"]');
    private footerCopy = this.page.locator('div[data-test="footer-copy"]');

    @step()
    async openSocialMedia(socialMediaName: string) {
        const pagePromise = this.page.context().waitForEvent('page');
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

    @step()
    async getFooterCopy() {
        return this.footerCopy;
    }
}