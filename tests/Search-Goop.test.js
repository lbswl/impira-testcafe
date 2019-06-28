/*
Author: Enrique Decoss

@package: tests
All test for Goop Search  
*/

import { Selector, ClientFunction } from 'testcafe'
import LoginAction from '../page-object/Login-actions-page'
import SearchGoop from '../page-object/Search-Goop-page'
import config from './config'

const loginAction = new LoginAction()
const searchGoop = new SearchGoop()

fixture`Search`
.page`${config.baseUrl}`

test("Should validate Search Free Filter for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToSearch('test')
    //Assertions
    await t.expect(searchGoop.itemCount).ok()
})

test("Should validate Search Analytic Filter for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToSearch('impressions:>500000')
    //Assertions
    await t.expect(searchGoop.itemCount).ok()
})

test("Should validate Search Filter (with space after colon) for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToSearch('person : 1')
    //Assertions
    await t.expect(searchGoop.sortIcon).ok()
})

test("Should validate Sort Search for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToSort()
    //Assertions
    await t.expect(searchGoop.sortIcon).ok()
})

test("Should validate Save Search for Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToSaveSearch('dog')
    //Assertions
    await t.expect(searchGoop.sortIcon).ok()
    await searchGoop.deleteSavedSearch()
})

test("Should validate Gallery View Goop webpage", async t => {
    loginAction.login()
    loginAction.loginForm(`${config.user}`, `${config.pass}`)
    await t.navigateTo(`${config.goopUrl}`)
    await searchGoop.goToGalleryView()
    //Assertions
    await t.expect(searchGoop.galleryViewPrev).ok()
    await t.expect(searchGoop.galleryViewNext).ok()
})
