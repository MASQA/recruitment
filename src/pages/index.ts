import { PricePlanPage } from './PricePlanPage';
import { SubmitPage as SubmitPage } from './SubmitPage';
import { Browser } from '../lib';

export class AllPages {
    public submitPage: SubmitPage;
    public priceplan: PricePlanPage;
    private browser: Browser;

    constructor(private nameBrowser: string = 'chrome') {
      this.buildBrowser()
      this.submitPage = new SubmitPage(this.browser)
      this.priceplan = new PricePlanPage(this.browser)
    }

    public activateSubmitPage(){
      this.buildBrowser()
      this.submitPage = new SubmitPage(this.browser);
    }

    public activatePricePlanPage(){
      this.buildBrowser()
      this.priceplan = new PricePlanPage(this.browser);
    }

    private buildBrowser() {
      this.browser = new Browser(this.nameBrowser)
    }

    public async dispose(): Promise<void> {
      await this.browser.close();
    }
}
