import Footer from "../components/footer.component";
import Header from "../components/header.component";

export default class BasePage {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
    }
}