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

dotenv.config()

@suite
class DbRequestTest {
  public static testDataList = (): number[] => {
    return [1,2]
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
  @data(DbRequestTest.testDataList)
  @data.naming(num => `${num} element collection should be checked`)
  @test
  public async requestShouldBeReturnOne(num) {
    await sleep(25000)
    'https://phptravels.com/order'
  }

  public before() {
    assignTmsUrl(process.env.TMS_URL)
    assignPmsUrl(process.env.PMS_URL)
    decorate<MochaAllure>(allure)
  }
}
