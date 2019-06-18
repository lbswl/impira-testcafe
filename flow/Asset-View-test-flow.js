import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import AssetViewpage from '../page-object/Asset-View-StitchFix-page'
import config from './config'

const loginAction = new LoginAction()
const assetViewpage = new AssetViewpage()

fixture`Asset View`
.page`https://staging.impira.com/`

test("Should validate Asset View Stitch Fix Mutable fields", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Stitch%20Fix/search')
    await assetViewpage.goToAsset()
    //Assertions
    await t.expect(assetViewpage.usageTitle.exists).ok()
})

