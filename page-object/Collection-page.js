/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Collection actions
*/

import { Selector, t } from 'testcafe'

class Collectionpage {
    constructor() {
        this.collectionIcon = Selector('a:nth-child(2) > .SideNav-link .SVGInline-svg')
        this.collectionDropdown = Selector('#CollectionBrowser-pageBarDropdown')
        this.newCollection = Selector('.AssetBrowserPageBar-titleMenuItem')
        this.collectionName = Selector('.is-paddedRight')
        this.createButton = Selector('.is-normal')
        this.notificationLink = Selector('.Notification-link')
        this.incollectionDrop = Selector('.DropdownInput-title')
        this.shareButton = Selector('li:nth-child(1) .AssetBrowserPageBar-titleMenuItem')
        this.contactSheet = Selector('li:nth-child(2) .AssetBrowserPageBar-titleMenuItem')
        this.delete = Selector('li:nth-child(4) .AssetBrowserPageBar-titleMenuItem')
        this.arrowAddUsers = Selector('.Select-arrow-zone')
        this.selectDropDown = Selector('.Select-menu-outer')
        this.selectShareModal = Selector('.CollectionGrant:nth-of-type(2) .DropdownInput-title')
        this.removeSelector = Selector(`[aria-labelledby='All'] [role='presentation']:nth-of-type(4)`)
        this.Button = Selector('.Button.is-normal')
        this.shareAssertNotification = Selector('.is-interactive > .is-gray-60-svg')
        this.radioBtnDelete = Selector(`[for='DeleteCollection-RadioInput-radio-1']`)
        this.dropDownViewer = Selector('.DropdownInput-centered-items')
        this.editorOption = Selector(`[aria-labelledby='ShareCollectionForm-dropdown'] [role='presentation']:nth-of-type(1) .DropdownInput-key`)
        //Rename
        this.rename = Selector('li:nth-child(5) .AssetBrowserPageBar-titleMenuItem')
        this.inputRename = Selector(`[class='TextInput-box is-gray-80'] [type]`)
        this.titlename = Selector('.AssetBrowserPageBar-resultSetTitle')
        this.radioBtnDelete0 = Selector(`[for='DeleteCollection-RadioInput-radio-0']`)
        //Create Collection from Asset
        this.oneSelection = Selector('.AssetCard:nth-of-type(4) .AssetCard-wrapper')
        this.collectionIconAsset = Selector('.PageBar-ActionIcon:nth-child(2) .SVGInline-svg')
        this.plusIcon = Selector(`[aria-label='plus'] svg`)

    
    }
    async goToCreateCollectionAsset(name){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.click(this.collectionIconAsset)        
        await t.click(this.plusIcon)
        await t.typeText(this.collectionName, name)
                .click(this.createButton)
                .click(this.notificationLink)
    }
    async goToCreateCollection(name){
        await t.hover(this.collectionIcon)
                .click(this.collectionIcon)
        await t.click(this.collectionDropdown)
        await t.click(this.newCollection)
        await t.typeText(this.collectionName, name)
                .click(this.createButton)
                .click(this.notificationLink)
    }

    async goToShareViewer(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
                .click(this.shareButton)
        await t.click(this.arrowAddUsers)
        await t.click(this.selectDropDown, {speed:0.5, offsetX:30, offsetY:40})
        await t.click(this.Button)
    }

    async goToShareEditor(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
        await t.click(this.shareButton)
                .click(this.dropDownViewer)
                .click(this.editorOption)
        await t.click(this.arrowAddUsers)
        await t.click(this.selectDropDown, {speed:0.5, offsetX:30, offsetY:40})
        await t.click(this.Button)
    }
    async goToRemoveShare(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
                .click(this.shareButton)
        await t.click(this.selectShareModal)
        await t.hover(this.removeSelector)
                .click(this.removeSelector)
        await t.click(this.Button)
    }

    async goToDelete(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
        await t.click(this.delete)
        await t.click(this.radioBtnDelete)
                .click(this.Button)
    }
    async goToDelete0(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
        await t.click(this.delete)
        await t.click(this.radioBtnDelete0)
                .click(this.Button)
    }

    async goToRename(newname){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
                .click(this.rename)
        await t.click(this.inputRename)
        await t.selectText(this.inputRename)
                .pressKey('delete')
        await t.typeText(this.inputRename, newname)
        await t.click(this.Button)
    }

    async selectEditorViewer(key) {
        this.shareViewEdit = Selector(`[role='presentation']:nth-of-type(${key}) .DropdownInput-menuItemContainer`)
        this.click(this.shareViewEdit)
    }

}

export default Collectionpage