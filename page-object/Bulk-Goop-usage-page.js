import { Selector, t } from 'testcafe'

class BulkGoopUsage {
    constructor() {
        this.oneSelection = Selector('.AssetCard:nth-of-type(9) .AssetCard-wrapper')
        this.secSelection = Selector('.AssetCard:nth-of-type(8) .AssetCard-wrapper')
        this.usage = Selector('.AssetDetailSection:nth-of-type(2) .AssetDetailSection-title')
        this.photographerIcon = Selector('.MutableTextInput-icons')
        this.notesIcon = Selector('.MutableTextArea-icons')
        this.notesArea = Selector('.TextArea-textarea')
        this.notesSubmit = Selector('.MutableTextArea-submitButton')
        this.expiresInput = Selector('#AssetDetailPanel-Expires-datePicker')
        this.indicator = Selector('.AssetDetailSection-statusIndicatorWrapper')
        this.clear = Selector('.TitleAndValueDisplay-row:nth-of-type(3) button')
        
    }

    async goToUsageExpired(){
        var today = new Date();
        var dd = String(today.getDate() - 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        await t.hover(this.secSelection)
                .click(this.secSelection)
                .click(this.expiresInput)
                .typeText(this.expiresInput, today, {paste:true})
                .hover(this.indicator)

    }

    async goToUsage(notes){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
                .click(this.notesIcon)
                .typeText(this.notesArea, notes)
                .click(this.notesSubmit)
    }

    async clearClick(){
        await t.hover(this.expiresInput)
                .click(this.expiresInput)
                .selectText(this.expiresInput)
                .pressKey('delete')
                .hover(this.indicator)
    }

}

export default BulkGoopUsage