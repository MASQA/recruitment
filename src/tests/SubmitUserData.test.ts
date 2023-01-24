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
  testCaseId}
from 'allure-decorators'
import { User } from '../model/User'
import { sleep } from '../utils/common'
import { AllPages } from '../pages'
import { Browser } from '../lib'

dotenv.config()

@suite
class Authorization {
 public before() {
    assignTmsUrl(process.env.TMS_URL)
    assignPmsUrl(process.env.PMS_URL)
    decorate<MochaAllure>(allure)
    
  }
  
  
  public static testData = (): User => {
    return User.dummy()
  }

  public static testDataList = (): User[] => {
    return User.dummyList()
  }

  @issue('11')
  @testCaseId('10')
  @severity(Severity.BLOCKER)
  @epic('Submitting ')
  @feature('Submitting with captcha')
  @story('Submit fullfilling')
  @owner('msiliyan')
  @tag('smoke')
  @description('Test submiting data')
  @data(Authorization.testData)
  @data.naming(user => `${user} data should be typed and submiting`)
  @test
  public async submitUserData(user: User) {
    const pages = new AllPages();
   
    await pages.submitPage.navigate('https://phptravels.com/demo');
    await pages.submitPage.SubmitPanel.sendInfo();

    await pages.dispose();
  }

  

  public after() {
    allure.attachment('Test attachment', 'test attachment content', ContentType.TEXT)

  }
}
