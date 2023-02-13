import { TextInput, Button, Browser, Page, findBy, findByInComponent, elementIsPresent, pageHasLoaded, WebComponent } from '../lib';
import { step } from 'allure-decorators'

export class SubmitPanel extends WebComponent {

    @findByInComponent('input[name="first_name"]')
    public Name: TextInput;

    @findByInComponent('input[name="last_name"]')
    public SeconfName: TextInput;

    @findByInComponent('input[name="business_name"]')
    public BusinessName: TextInput;
    
    @findByInComponent('input[name="email"]')
    public Email: TextInput;

    @findByInComponent('#numb1')
    public FirstNumCaptcha: WebComponent;
    
    @findByInComponent('#numb2')
    public SecondNumCaptcha: WebComponent;
    
    @findByInComponent('#number')
    public ResultCaptcha: TextInput;

    @findByInComponent('#demo')
    public Submit: Button;

    @findByInComponent('.col-md-12 > .text-center')
    public SubmitMessage: WebComponent;

    @step('Заполнить информацию по пользователю')
    public async sendInfo() {
        await this.Name.type('John')
        await this.SeconfName.type('Smith')
        await this.BusinessName.type('J.S.Smith')
        await this.Email.type('jssmith@domain.any')
        await this.fullFillCaptcha()
        await this.Submit.click()
    }

    @step('Заполнить captcha')
    private async fullFillCaptcha() {
        const fNum = await this.FirstNumCaptcha.getText()
        const sNum = await this.SecondNumCaptcha.getText()
        await this.ResultCaptcha.type((fNum + sNum).toString())
    }
}