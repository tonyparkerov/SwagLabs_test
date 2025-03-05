import BasePage from "./BasePage";
import { step } from "../misc/step";

export default class LoginPage extends BasePage {
    public pagePath = '/';

    private usernameInput = this.page.locator('[data-test="username"]');
    private passwordInput = this.page.locator('[data-test="password"]');
    private loginButton = this.page.locator('[data-test="login-button"]');
    private errorIcon = this.page.locator('[data-icon="times-circle"]');
    public errorMessage = this.page.locator('[data-test="error"]');
    private closeErrorButton = this.page.locator('[data-test="error-button"]');

    @step()
    async login(username: string = '', password: string = '') {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    @step()
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    @step()
    async closeErrorMessage() {
        await this.closeErrorButton.click();
    }

    @step()
    async countErrorIcons() {
        return await this.errorIcon.count();
    }
}