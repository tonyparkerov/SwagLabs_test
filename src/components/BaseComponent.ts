export default abstract class BaseComponent {
    protected page;
    protected context;
    
    constructor(page: any, context?: any) {
        this.page = page;
        this.context = context;
    }
}