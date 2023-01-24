import { TextInput, Button, Browser, Page, findBy, elementIsPresent, pageHasLoaded, WebComponent } from '../lib';
import { SubmitPanel } from './SubmitPanel'

export class SubmitPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  @findBy('.mb-0')
  public Logo: WebComponent; 
 
  @findBy('.demo_form')
  public SubmitPanel: SubmitPanel; 



  public loadCondition() {
    return elementIsPresent(() => this.Logo);
  }
}
