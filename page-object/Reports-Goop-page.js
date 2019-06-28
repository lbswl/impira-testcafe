/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Goop Reports webpage
*/

import { Selector, t } from 'testcafe'

class ReportsGoop {
    constructor() {
        this.reportIcon = Selector('a:nth-child(3) > .SideNav-link .SVGInline-svg')
        this.reportTitle = Selector('.PageBar-title')
        this.firstRow = Selector('.rt-td:nth-of-type(1)')
        this.customFilter = Selector('.CustomFiltersDropdown-titleText')
        this.changeTime = Selector('.InsightsPageBar-timeRangeDropdown')
        this.past3months = Selector('.open li:nth-child(2) .DropdownInput-key')

        
    }

    async goToReports(){
        await t.hover(this.reportIcon)
                .click(this.reportIcon)
    }

    async goToReportDetail(){
        await t.hover(this.firstRow)
                .click(this.firstRow)
        await t.click(this.customFilter)
        await t.click(this.changeTime)
        await t.hover(this.past3months)
    }

}

export default ReportsGoop