/*
Author: Enrique Decoss

@package: tests
All test for Collections 
*/

import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import Collectionpage from '../page-object/Collection-page'
import utils from '../lib/utils'
import config from './config'

const loginAction = new LoginAction()
const collectionPage = new Collectionpage()

fixture`Collections`
.page`${config.baseUrl}`

test("Should create Collection on Impira webpage and Share as Viewer", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollection(utils.generateID(10))
    await collectionPage.goToShareViewer()
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete()
})
test("Should create Collection on Impira webpage and Share as Editor", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollection(utils.generateID(10))
    await collectionPage.goToShareEditor()
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete()
})
test("Should validate Collection on Impira webpage, Share as Viewer and Remove Share Collection", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollection(utils.generateID(10))
    await collectionPage.goToShareViewer()
    await collectionPage.goToRemoveShare()
    //Assertions
    await t.expect(collectionPage.shareAssertNotification.exists).ok()
    await collectionPage.goToDelete()
})
test("Should Rename Collection on Impira webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollection(utils.generateID(10))
    await collectionPage.goToRename('New_rename_test12345')
    //Assertions
    await t.expect(collectionPage.titlename.innerText).eql('New_rename_test12345')
    await collectionPage.goToDelete()
})
test("Should create Collection on Impira webpage from asset view", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await collectionPage.goToCreateCollectionAsset(utils.generateID(10))
    //Assertions
    await t.expect(collectionPage.incollectionDrop.exists).ok()
    await collectionPage.goToDelete0()
})