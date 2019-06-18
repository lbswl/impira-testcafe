import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import BulkGoopUsage from '../page-object/Bulk-Goop-usage-page'
import config from './config'

const loginAction = new LoginAction()
const bulkGoop = new BulkGoopUsage()

fixture`Bulk Actions`
.page`https://staging.impira.com/`


test("Should check Goop usage on webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Goop/search')
    bulkGoop.goToUsage('Automated Test')
    //Assertions
    await t.expect(bulkGoop.photographerIcon).ok()
    await t.navigateTo('https://staging.impira.com/o/Goop/search')
    await bulkGoop.goToUsageExpired()
    //Asertions
    await t.expect(bulkGoop.indicator.innerText).contains('Expired')
    
    //Clear 
    await bulkGoop.clearClick()
})
