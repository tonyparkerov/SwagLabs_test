import { type Page } from '@playwright/test';

export default abstract class BasePage {
    public abstract pagePath: string;
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
    }
}