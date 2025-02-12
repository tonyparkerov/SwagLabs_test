import CartPage from "./pages/cart.page";
import LoginPage from "./pages/login.page";
import MainPage from "./pages/main.page";

export default class Application {
    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.mainPage = new MainPage(page);
        this.cartPage = new CartPage(page);
    }
}