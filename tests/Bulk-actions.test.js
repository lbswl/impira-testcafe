/*
Author: Enrique Decoss

@package: tests
All test for Impira 
*/

import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import BulkAction from '../page-object/Bulk-actions-page'
import config from './config'

const loginAction = new LoginAction()
const bulkAction = new BulkAction()

fixture`Bulk Actions`
.page`${config.baseUrl}`

test("Should try to login and see Impira page", async t => {

    //await t.maximizeWindow()
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    

    //Assertions
    await t.expect(loginAction.userPassword.exists).notOk()
    await t.expect(bulkAction.oneSelection.exists).ok()

    //bulkAction.shiftClick()
    //await goBack()
    //bulkAction.goToSelectOne()
    //bulkAction.clickClear()
    //bulkAction.goToSelectMultiple()

    //Assertions
    //await t.expect(bulkAction.clear.exists).notOk()
})
