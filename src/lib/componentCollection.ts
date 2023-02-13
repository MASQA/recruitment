import { WebElement, WebElementPromise } from "selenium-webdriver";
import { WebComponent } from "./components";

export class WebCollection<T extends WebComponent> {
    constructor(
        protected parent: WebComponent,
        protected element: Promise<WebElement>,
        public selector: string,
    ){}

    public async getItemCount() {
        const temp = await this.element;
        // @ts-ignore
        return temp.length;
    }

    public getItem(ComponentClass, index: number) {
        const selector = this.selector + `:nth-child(${index})`;
        const promise = this.parent.findElementInElement(selector);
        const component = this.createItem(ComponentClass, promise, selector);
        return component;
    }

    protected createItem(
        type: new(promise: WebElementPromise, selector:string) => T,
        promise: WebElementPromise,
        selector: string,
    ){
        return new type(promise, selector);
    }
}