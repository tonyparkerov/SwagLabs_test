import BasePage from "./BasePage";
import CheckoutCompletePage from "./checkout/CheckoutCompletePage";
import CheckoutFirstPage from "./checkout/CheckoutFirstPage";
import CheckoutOverviewPage from "./checkout/CheckoutOverviewPage";

export default class CheckoutFlow extends BasePage {
    public firstPage = new CheckoutFirstPage(this.page);
    public overviewPage = new CheckoutOverviewPage(this.page);
    public completePage = new CheckoutCompletePage(this.page);
}