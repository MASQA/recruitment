import { expect } from 'chai';
import { Builder, ThenableWebDriver, WebElement, By, WebElementPromise } from 'selenium-webdriver';

export class WebComponent {
  constructor(protected element: WebElementPromise | WebElement, public selector: string) { 
    console.log(this.selector);
    console.dir(this);
  }

  public async click() {
    try {
      return await this.element.click();
    } catch (clickErr) {
      try {
        await this.element.getDriver().executeScript('arguments[0].click();', this.element);
      } catch (jsErr) {
        throw clickErr;
      }
    }
  }

  public findElementInElement(selector: string): WebElementPromise {
    return this.element.findElement(By.css(selector));
  }

  public findElementsInElement(selector: string) {
    return this.element.findElements(By.css(selector));
  }

  public getCssValue(cssValue: string) {
    return this.element.getCssValue(cssValue);
  }

  public getAttribute(atrName: string) {
    return this.element.getAttribute(atrName);
  }


  public async isDisplayed() {
    try {
      return await this.element.isDisplayed();
    } catch (ex) {
      return false;
    }
  }

  public async getText() {
    let text = await this.element.getText();
    return text.trim();
  }
}

export class Button extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public async isDisabled() {
    try {
      return await this.element.getAttribute('disabled') === 'disabled';
    } catch (ex) {
      return false;
    }
  }
}





export class TextInput extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public async type(text: string) {
    const temp = await this.element.isDisplayed()
    expect(temp, `Element with selector ${this.selector} is not found`).to.be.true
    return this.element.sendKeys(text);
  }
}
