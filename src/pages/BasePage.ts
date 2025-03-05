import { type Page } from '@playwright/test';
import { step } from '../misc/step';

export default abstract class BasePage {
    public abstract pagePath: string;
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    @step()
    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
    }
}