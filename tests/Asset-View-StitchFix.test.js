/*
Author: Enrique Decoss

@package: tests
All test for Stitch Fix
*/

import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import AssetViewpage from '../page-object/Asset-View-StitchFix-page'
import config from './config'

const loginAction = new LoginAction()
const assetViewpage = new AssetViewpage()

fixture`Asset View`
.page`${config.baseUrl}`

test("Should validate Asset View Stitch Fix Mutable fields", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Stitch%20Fix/search')
    await assetViewpage.goToAsset()
    //Assertions
    await t.expect(assetViewpage.usageTitle.exists).ok()
})
test("Should validate Asset View Stitch Fix Zoom and Magnify", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Stitch%20Fix/search')
    await assetViewpage.goToZoomAndMagnify()
    //Assertions
    await t.expect(assetViewpage.zoomBtn.exists).ok()
})
test("Should validate Collection on Stitch Fix", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Stitch%20Fix/search')
    await assetViewpage.goToCollection()
    //Assertions
    await t.expect(assetViewpage.incollectionDrop.exists).ok()
    await assetViewpage.goToDelete()
})
test("Should validate scroll on Stitch Fix", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Stitch%20Fix/search')
    await assetViewpage.goToAssetX()
    //Assertions
    await t.expect(assetViewpage.secondSelection.exists).notOk()
})

