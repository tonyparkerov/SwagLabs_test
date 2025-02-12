import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    #usernameInput = this.page.locator('[data-test="username"]');
    #passwordInput = this.page.locator('[data-test="password"]');
    #loginButton = this.page.locator('[data-test="login-button"]');

    async goToLoginPage() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.#usernameInput.fill(username);
        await this.#passwordInput.fill(password);
        await this.#loginButton.click();
    }
}