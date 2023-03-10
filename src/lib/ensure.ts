import { WebElementPromise } from 'selenium-webdriver';
import { WebComponent, Button, TextInput } from './';
import { expect } from 'chai';
import { step } from 'allure-decorators'

class WebComponentEnsurer {
  constructor(private component: WebComponent) {
  }

  public async textIs(expected: string) {
    const text = await this.component.getText();

    if (expected.trim() !== text.trim()) {
      throw new Error(`Element ${this.component.selector} text is '${text}'. Expected value is '${expected}'`);
    }
  }


  @step('Убеждаемся что элемент видимый')
  public async isVisible() {
    const actual = await this.component.isDisplayed()
    expect(actual).to.be.true 
  }

  @step('Убеждаемся что элемент не отображается')
  public async isNotVisible() {
    const actual = await this.component.isDisplayed()
    expect(!actual).to.be.true 
  }
}

class ButtonEnsurer extends WebComponentEnsurer {
  protected button: Button;
  constructor(button: Button) {
    super(button);
    this.button = button;
  }

  public async isNotDisabled() {
    if (await this.button.isDisabled()) {
      throw new Error(`Button ${this.button.selector} is disabled`);
    }
  }
}

class TextInputEnsurer extends WebComponentEnsurer {
  constructor(element: TextInput) {
    super(element);
  }
}

export function ensure(component: Button): ButtonEnsurer;
export function ensure(component: TextInput): TextInputEnsurer;
export function ensure(component: WebComponent): WebComponentEnsurer;
export function ensure(component: WebComponent | Button): any {
    if (component instanceof Button) {
        return new ButtonEnsurer(component);
    } else if (component instanceof WebComponent) {
        return new WebComponentEnsurer(component);
    }
}
