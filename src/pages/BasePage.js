import Footer from "../components/Footer";
import Header from "../components/Header";

export default class BasePage {
    page;

    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
    }
}