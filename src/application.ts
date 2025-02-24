import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Page } from "@playwright/test";
import CheckoutFlow from "./pages/CheckoutFlow";
import Cookie from "./data/models/cookieModel";

export default class Application {
    private page;
    public loginPage;
    public mainPage;
    public cartPage;
    public header;
    public footer;
    public checkoutFlow;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.mainPage = new MainPage(page);
        this.cartPage = new CartPage(page);
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.checkoutFlow = new CheckoutFlow(page);
    }

    async getCookies(){
        return await this.page.context().cookies();
    }

    async setUserCookies(userName: string) {
        await this.page.context().addCookies([new Cookie(userName)]);
    }
}