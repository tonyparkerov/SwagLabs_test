import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserContext, Page } from "@playwright/test";

export default class Application {
    private page;
    private context;
    public loginPage;
    public mainPage;
    public cartPage;
    public header;
    public footer;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.loginPage = new LoginPage(page);
        this.mainPage = new MainPage(page);
        this.cartPage = new CartPage(page);
        this.header = new Header(page, context);
        this.footer = new Footer(page, context);
    }

    async getCookies(){
        return await this.context.cookies();
    }

    async setUserCookies(userName: string) {
        await this.context.addCookies([{
            name: 'session-username',
            value: userName,
            domain: 'www.saucedemo.com',
            path: '/'
        }]);
    }
}