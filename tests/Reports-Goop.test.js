import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import ReportsGoop from '../page-object/Reports-Goop-page'
import config from './config'

const loginAction = new LoginAction()
const reportsGoop = new ReportsGoop()

fixture`Reports`
.page`${config.baseUrl}`

test("Should check Reports on Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await reportsGoop.goToReports()
    //Assertions
    await t.expect(reportsGoop.reportTitle).ok()
})

test("Should validate Details in Reports for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await reportsGoop.goToReports()
    await reportsGoop.goToReportDetail()
    //Assertions
    await t.expect(reportsGoop.past3months).ok()
})
