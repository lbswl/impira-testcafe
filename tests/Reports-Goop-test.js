import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import ReportsGoop from '../page-object/Reports-Goop-page'
import config from './config'

const loginAction = new LoginAction()
const reportsGoop = new ReportsGoop()

fixture`Reports`
.page`https://staging.impira.com/`

test("Should check Reports in Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Goop/search')
    await reportsGoop.goToReports()
    //Assertions
    await t.expect(reportsGoop.reportTitle).ok()
})

test("Should validate Details in Reports for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Goop/search')
    await reportsGoop.goToReports()
    await reportsGoop.goToReportDetail()
    //Assertions
    await t.expect(reportsGoop.past3months).ok()
})
