import { suite, test } from '@testdeck/mocha'
import { ContentType, Severity } from 'allure-js-commons'
import { allure, MochaAllure } from 'allure-mocha/runtime'
import * as dotenv from 'dotenv'
import {
  assignPmsUrl,
  assignTmsUrl,
  data,
  decorate,
  description,
  epic,
  feature,
  issue,
  owner,
  severity,
  story,
  tag,
  testCaseId
}  from 'allure-decorators'
import { sleep } from '../utils/common'
import { AllPages } from '../pages'
import { Browser } from '../lib'
import { ensure } from '../lib/'

dotenv.config()

@suite
class OptionsOfPlansTest {
  public static testData = (): any[] => {
    return [{ plan:'Startup', option:'Basic Support' }]
  }


  public static testDataListChecked = (): any[] => {
    return [
      { plan:'Startup', option:'Basic Support' },
      { plan:'Startup', option:'Web Application' },
      { plan:'Startup', option:'Free Installation' },
      { plan:'Startup', option:'100% Opensource-Code' },
      { plan:'Agency', option:'Basic Support' },
      { plan:'Agency', option:'Web Application' },
      { plan:'Agency', option:'Free Installation' },
      { plan:'Agency', option:'100% Opensource-Code' },
      { plan:'Agency', option:'Multi Language' },
      { plan:'Agency', option:'Multi Currency' },
      { plan:'Business', option:'Basic Support' },
      { plan:'Business', option:'Web Application' },
      { plan:'Business', option:'Free Installation' },
      { plan:'Business', option:'100% Opensource-Code' },
      { plan:'Business', option:'Multi Language' },
      { plan:'Business', option:'Multi Currency' },
      { plan:'Business', option:'B2B Agents Module' },
      { plan:'Enterprise', option:'Basic Support' },
      { plan:'Enterprise', option:'Web Application' },
      { plan:'Enterprise', option:'Free Installation' },
      { plan:'Enterprise', option:'100% Opensource-Code' },
      { plan:'Enterprise', option:'Multi Language' },
      { plan:'Enterprise', option:'Multi Currency' },
      { plan:'Enterprise', option:'B2B Agents Module' },
      { plan:'Enterprise', option:'User Balance Wallet' },
      { plan:'Enterprise', option:'RESTful API & Docs' },
      { plan:'Enterprise', option:'Lifetime free updates' }
    ]
  }

  public static testDataListNotChecked = (): any[] => {
    return [
      { plan:'Startup', option:'Multi Language' },
      { plan:'Startup', option:'Multi Currency' },
      { plan:'Startup', option:'B2B Agents Module' },
      { plan:'Startup', option:'User Balance Wallet' },
      { plan:'Startup', option:'RESTful API & Docs' },
      { plan:'Startup', option:'Lifetime free updates' },
      { plan:'Agency', option:'B2B Agents Module' },
      { plan:'Agency', option:'User Balance Wallet' },
      { plan:'Agency', option:'RESTful API & Docs' },
      { plan:'Agency', option:'Lifetime free updates' },
      { plan:'Business', option:'User Balance Wallet' },
      { plan:'Business', option:'RESTful API & Docs' },
      { plan:'Business', option:'Lifetime free updates' }
    ]
  }


  @issue('11')
  @testCaseId('10')
  @severity(Severity.BLOCKER)
  @epic('PricePlans')
  @feature('Plans presented on panels with options')
  @story('Sets active options is difference in relation to plan')
  @owner('msiliyan')
  @tag('smoke')
  @description('Test finding collections')
  @data(OptionsOfPlansTest.testData)
  @data.naming(fixture => `For plan ${fixture.plan} option ${fixture.option} should be checked`)
  @test
  public async optionIsChecked(fixture) {
    const pages = new AllPages();
   
    await pages.pricePlan.navigate('https://phptravels.com/pricing');
    
    await ensure(
      await
        (await
          (await pages.pricePlan
            .rowPlans
            .returnPlanByName(fixture.plan)
          ).returnOptionByName(fixture.option)
        ).CheckMarkIco
      ).isVisible();

    await pages.dispose();
    
  }

  @issue('11')
  @testCaseId('10')
  @severity(Severity.BLOCKER)
  @epic('PricePlans')
  @feature('Plans presented on panels with options')
  @story('Sets active options is difference in relation to plan')
  @owner('msiliyan')
  @tag('smoke')
  @description('Test finding collections')
  @data(OptionsOfPlansTest.testData)
  @data.naming(fixture => `For plan ${fixture.plan} option ${fixture.option} should not be checked`)
  @test
  public async optionIsNotСhecked(fixture) {
    const pages = new AllPages();
   
    await pages.pricePlan.navigate('https://phptravels.com/pricing');
    
    await ensure(
      await
        (await
          (await pages.pricePlan
            .rowPlans
            .returnPlanByName(fixture.plan)
          ).returnOptionByName(fixture.option)
        ).CrossIco
      ).isVisible();

    await pages.dispose();
    
  }
  public before() {
    assignTmsUrl(process.env.TMS_URL)
    assignPmsUrl(process.env.PMS_URL)
    decorate<MochaAllure>(allure)
  }
}
