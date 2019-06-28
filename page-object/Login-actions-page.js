/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class LoginAction {
    constructor() {
        this.loginClick = Selector('.auth0-lock-social-button-text')
        this.userName = Selector('#identifierId')
        this.userPassword = Selector('#password')
        this.nextButton = Selector('#identifierNext')
        this.nextPassword = Selector('#passwordNext')
    }
    async login(){
        await t.click(this.loginClick)

    }

    async loginForm(username, password){
        await t.typeText(this.userName, username, {paste:true})
                .click(this.nextButton)
                .typeText(this.userPassword, password, {paste:true})
                .click(this.nextPassword)
    }

}

export default LoginAction