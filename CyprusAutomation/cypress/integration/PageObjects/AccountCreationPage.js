/// <reference types = "cypress"/>
class AccountCreationPage {

    enterFirstName(value) {
        cy.wait(3000)
        cy.get('#customer_firstname').type(value)
    }

    enterLastName(value) {
        cy.get('#customer_lastname').type(value)
    }

    enterPassword(value) {
        cy.get('#passwd').type(value)
    }

    clickOnTitleRadioButton() {
        cy.get('#id_gender1').click()
    }

    enterCompanyName(value) {
        cy.get('#company').type(value)
    }

    enterAddressOne(value) {
        cy.get('#address1').type(value)
    }

    enterAddressTwo(value) {
        cy.get('#address2').type(value)
    }

    enterCity(value) {
        cy.get('#city').type(value);
    }

    enterState(value) {
        cy.get('#id_state').select(value)
    }

    enterPostalCode(value) {
        cy.get('#postcode').type(value)
    }

    enterOtherInfo(value) {
        cy.get('#other').type(value)
    }

    enterPhoneNumber(value) {
        cy.get('#phone').type(value)
    }

    enterMobileNumber(value) {
        cy.get('#phone_mobile').type(value)
    }

    enterAliasName() {
        cy.get('#submitAccount').click()
    }

    clickOnSubmitButton() {
        cy.get('#submitAccount').click()
    }

}

export default AccountCreationPage