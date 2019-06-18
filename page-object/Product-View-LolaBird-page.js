import { Selector, t } from 'testcafe'

class ProductLola {
    constructor() {
        this.productDetail = Selector('.ProductDisplay-title')
        this.productNameTitle = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(3) .TitleAndValueDisplay-title')
        this.productNameValue = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(3) .TitleAndValueDisplay-value')
        this.brandDescTitle = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(11) .TitleAndValueDisplay-title')
        this.brandDescValue = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(11) .TitleAndValueDisplay-value')
        this.priceTitle = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(5) .TitleAndValueDisplay-title')
        this.priceValue = Selector('.EntityPanel-TitleAndValueDisplay:nth-child(5) .TitleAndValueDisplay-value')
        //https://staging.impira.com/o/Lola%20+%20Bird
        //https://staging.impira.com/o/Lola%20+%20Bird/v/9a30e00efdd63bf2

        
    }

    async goToProductView(){
        await t.hover(this.productDetail)
                .click(this.productDetail)
    }
}

export default ProductLola