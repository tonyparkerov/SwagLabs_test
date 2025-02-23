import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    private usernameInput = this.page.locator('[data-test="username"]');
    private passwordInput = this.page.locator('[data-test="password"]');
    private loginButton = this.page.locator('[data-test="login-button"]');
    private errorIcon = this.page.locator('[data-icon="times-circle"]');
    public errorMessage = this.page.locator('[data-test="error"]');
    private closeErrorButton = this.page.locator('[data-test="error-button"]');

    async goToLoginPage() {
        await this.page.goto('/');
    }
    async login(username: string = '', password: string = '') {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async closeErrorMessage() {
        await this.closeErrorButton.click();
    }

    async countErrorIcons() {
        return await this.errorIcon.count();
    }
}