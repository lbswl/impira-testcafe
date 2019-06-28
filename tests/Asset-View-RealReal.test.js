import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import AssetViewRealpage from '../page-object/Asset-View-RealReal-page'
import config from './config'

const loginAction = new LoginAction()
const assetViewRealpage = new AssetViewRealpage()

fixture`Asset View Real Real`
.page`${config.baseUrl}`

test("Should validate Asset View Real Real Mutable fields", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/The%20RealReal/search')
    await assetViewRealpage.goToAsset()
    //Assertions
    await t.expect(assetViewRealpage.tagEditBtn.exists).ok()
})
test("Should validate Asset View Real Real Zoom and Magnify", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/The%20RealReal/search')
    await assetViewRealpage.goToZoomAndMagnify()
    //Assertions
    await t.expect(assetViewRealpage.zoomBtn.exists).ok()
})

