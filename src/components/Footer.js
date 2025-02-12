import BaseComponent from "./BaseComponent";

export default class Footer extends BaseComponent {
    #twitterLogo = this.page.locator('a[data-test="social-twitter"]');
    #facebookLogo = this.page.locator('a[data-test="social-facebook"]');
    #linkedinLogo = this.page.locator('a[data-test="social-linkedin"]');
    #footerCopy = this.page.locator('div[data-test="footer-copy"]');

    async openSocialMedia(socialMediaName) {
        switch (socialMediaName) {
            case 'twitter':
                await this.#twitterLogo.click();
                break;
            case 'facebook':
                await this.#facebookLogo.click();
                break;
            case 'linkedin':
                await this.#linkedinLogo.click();
                break;
            default:
                console.log('Wrong social media name given')
                break;
        }
    }
}