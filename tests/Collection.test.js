import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import Collectionpage from '../page-object/Collection-page'
import config from './config'

const loginAction = new LoginAction()
const collectionPage = new Collectionpage()

fixture`Collections`
.page`${config.baseUrl}`

test("Should create Collection in Impira webpage and Share as Viewer", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollections("Automated Collection1")
    await collectionPage.goToShareViewer()
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete()
})
test("Should create Collection in Impira webpage and Share as Editor", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollections("Automated Collection2")
    await collectionPage.goToShareEditor()
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete()
})
test("Should validate Collection in Impira webpage, Share as Viewer and Remove Share Collection", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollections("Automated Collection3")
    await collectionPage.goToShareViewer()
    await collectionPage.goToRemoveShare()
    //Assertions
    await t.expect(collectionPage.shareAssertNotification.exists).ok()
    await collectionPage.goToDelete()
})
test("Should Rename Collection in Impira webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollections("Automated Collection4")
    await collectionPage.goToRename('New_rename_test12345')
    //Assertions
    await t.expect(collectionPage.titlename.innerText).eql('New_rename_test12345')
    await collectionPage.goToDelete()
})
test("Should create Collection in Impira webpage from asset view", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollectionAsset("Automated Collection5")
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete()
})