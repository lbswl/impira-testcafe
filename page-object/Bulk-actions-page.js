/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Impira asset search page
*/

import { Selector, t } from 'testcafe'

class BulkAction {
    constructor() {
        this.oneSelection = Selector('.AssetCard:nth-of-type(11) .AssetCard-wrapper')
        this.oneContent = Selector ('.AssetCard:nth-child(1) .AssetCard-link > div:nth-child(1)')
        this.oneClick = Selector('.AssetCard:nth-of-type(1) .AssetCard-selectIcon') 
        this.clear = Selector('.AssetBrowserPageBar-clearBulkSelect')
        this.secondAsset = Selector('.AssetCard:nth-of-type(2) .AssetCard-wrapper')
        this.secondSelection = Selector('.ImageGrid .AssetCard:nth-of-type(2) .AssetCard-checkerboard')
        this.thirdSelection = Selector('.AssetCard:nth-child(3) .AssetCard-selectIcon .SVGInline-svg')
        //.AssetCard:nth-child(2) .AssetCard-selectIcon .SVGInline-svg
        
    }

    async goToSelectOne(){
        await t.hover(this.secondAsset, {speed:0.01})
                .hover(this.oneContent, {speed:0.01, offsetX:30, offsetY:50})
                .click(this.oneClick)
    }

    async clickClear(){
        await t.hover(this.clear)
                .click(this.clear)
    }

    async goToSelectMultiple(){
        await t.hover(this.oneClick)
                .click(this.oneClick)
                .hover(this.secondSelection)
                .click(this.secondSelection)
                .hover(this.thirdSelection)
                .click(this.thirdSelection)
    }

}

export default BulkAction