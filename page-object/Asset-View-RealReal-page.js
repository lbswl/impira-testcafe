import { Selector, t } from 'testcafe'

class AssetViewRealpage {
    constructor() {
        this.oneSelection = Selector('.AssetCard:nth-of-type(4) .AssetCard-wrapper')
        //Asset Tags    
        this.keywordButton = Selector('#react-tabs-10 .SVGInline-svg')
        this.infoButton = Selector('#react-tabs-8 .SVGInline-svg')
        //Mutable Fields
        this.infoEditBtn = Selector('.MutableTextInput-icons')
        this.tagEditBtn = Selector('.EditButtons')
        this.newCollection = Selector('.AssetBrowserPageBar-titleMenuItem')
        // Zoom and Magnify Glass
        this.zoomBtn = Selector(`[aria-label='zoom-in'] svg`)
        this.magnifyBtn = Selector(`[aria-label='magnify']`)
        this.assetCheck = Selector('.AssetViewerCanvas-checkerboard')
        this.assetZoom = Selector('.body img')
        //Manage Collections
        this.collectionBtnAsset = Selector('.PageBar-ActionIcon:nth-child(2) .SVGInline-svg')
        this.newCollectionBtn = Selector('.AssetCollectionsModal-createNewCollectionIcon')
        this.newCollectionName = Selector('.is-paddedRight')
        this.createButton = Selector('.is-normal')
        this.notificationLink = Selector('.Notification-link')
        this.incollectionDrop = Selector('.DropdownInput-title')
        this.delete = Selector('li:nth-child(4) .AssetBrowserPageBar-titleMenuItem')
        this.button = Selector('.Button.is-normal')
        //

    
    }
    async goToAsset(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.click(this.keywordButton)
    }
    async goToZoomAndMagnify(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.click(this.magnifyBtn)
                .hover(this.assetCheck, {speed:0.5, offsetX:30, offsetY:40})
                .hover(this.assetCheck, {speed:0.5, offsetX:50, offsetY:50})
        //await t.click(this.zoomBtn)
    }
    async goToCollection(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.click(this.collectionBtnAsset)
                .click(this.newCollectionBtn)
        await t.click(this.newCollectionName )
                .typeText(this.newCollectionName , 'Automated Collection')
                .click(this.button)
                .click(this.notificationLink)
    }
    async goToDelete(){
        await t.hover(this.incollectionDrop)
                .click(this.incollectionDrop)
        await t.click(this.delete)
                .click(this.button)
    }
    async selectEditorViewer(key) {
        this.shareViewEdit = Selector(`[role='presentation']:nth-of-type(${key}) .DropdownInput-menuItemContainer`)
        this.click(this.shareViewEdit)
    }

}

export default AssetViewRealpage