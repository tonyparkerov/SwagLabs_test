import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    private usernameInput = this.page.locator('[data-test="username"]');
    private passwordInput = this.page.locator('[data-test="password"]');
    private loginButton = this.page.locator('[data-test="login-button"]');

    async goToLoginPage() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}