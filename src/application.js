import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class Application {
    #page;
    #context;

    constructor(page, context) {
        this.#page = page;
        this.#context = context;
        this.loginPage = new LoginPage(page);
        this.mainPage = new MainPage(page);
        this.cartPage = new CartPage(page);
        this.header = new Header(page, context);
        this.footer = new Footer(page, context);
    }

    async getCookies(){
        return await this.#context.cookies();
    }

    async setUserCookies(userName) {
        await this.#context.addCookies([{
            name: 'session-username',
            value: userName,
            domain: 'www.saucedemo.com',
            path: '/'
        }]);
    }
}