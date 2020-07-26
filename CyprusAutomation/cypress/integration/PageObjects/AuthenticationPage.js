/// <reference types = "cypress"/>
class AuthenticationPage {

    enterEmail(value) {
        cy.get('#email_create').type(value)
        return this
    }

    clickOnCreateAnAcoountButton() {
        cy.get('#SubmitCreate').click()
        cy.wait(3000)
        return this
    }

}

export default AuthenticationPage