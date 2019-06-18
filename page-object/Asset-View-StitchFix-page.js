import { Selector, t } from 'testcafe'

class AssetViewpage {
    constructor() {
        this.oneSelection = Selector('.AssetCard:nth-of-type(4) .AssetCard-wrapper')
        //Asset Tags    
        this.tagButton = Selector('#react-tabs-2 .SVGInline-svg')
        this.versionButton = Selector('#react-tabs-4 .SVGInline-svg')
        this.usageRightButton = Selector('#react-tabs-6 .SVGInline-svg')
        //Mutable Fields
        this.infoEditBtn = Selector('.MutableTextInput-icons')
        this.tagEditBtn = Selector('.EditButtons')
        this.versionTitle = Selector('.AssetDetailHistoryPanel-title')
        this.newCollection = Selector('.AssetBrowserPageBar-titleMenuItem')
        this.usageTitle = Selector('.UsageWindowsManager-title')
        // Zoom and Magnify Glass
        this.zoomBtn = Selector('.UsageWindowsManager-title')
        this.magnifyBtn = Selector(`[aria-label='magnify']`)
        //https://staging.impira.com/o/Stitch%20Fix
        //#react-tabs-4 .SVGInline-svg
    
    }
    async goToAsset(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.click(this.tagButton)
        await t.click(this.versionButton)
        await t.click(this.usageRightButton)
    }

    async selectEditorViewer(key) {
        this.shareViewEdit = Selector(`[role='presentation']:nth-of-type(${key}) .DropdownInput-menuItemContainer`)
        this.click(this.shareViewEdit)
    }

}

export default AssetViewpage