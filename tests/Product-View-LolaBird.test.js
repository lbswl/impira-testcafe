import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import ProductLola from '../page-object/Product-View-LolaBird-page'
import config from './config'

const loginAction = new LoginAction()
const productLola = new ProductLola()

fixture`Product View`
.page`${config.baseUrl}`

test("Should check Product View on Lola&Bird webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo('https://staging.impira.com/o/Lola%20+%20Bird/v/9a30e00efdd63bf2')
    await productLola.goToProductView()

    //Assertions
    await t.expect(productLola.productNameTitle.exists).ok()
    await t.expect(productLola.productNameValue.exists).ok()
    await t.expect(productLola.brandDescTitle.exists).ok()
    await t.expect(productLola.brandDescValue.exists).ok()
    await t.expect(productLola.priceTitle.exists).ok()
    await t.expect(productLola.priceValue.exists).ok()
})
