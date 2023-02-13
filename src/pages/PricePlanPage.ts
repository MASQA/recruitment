import { WebComponent, Browser, Page, findBy, elementIsVisible } from '../lib';
import { RowPlans } from './CollectionPlans';

export class PricePlanPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

   @findBy('.mb-0')
  public Logo: WebComponent; 

  @findBy('.princing-section .row')
  public rowPlans: RowPlans;
  
  public loadCondition() {
    return elementIsVisible(() => this.rowPlans);
  }  
}
