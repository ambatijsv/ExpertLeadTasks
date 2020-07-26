
/// <reference types = "cypress"/>
class MyAccountPage {

    validateMyAccountPageLanding(value1, value2, value3) {
        cy.title().should('eq', value1)
        cy.get('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').contains(value2 + " " + value3)
        cy.get('.page-heading').should('be.visible')
    }

    backNavigationToHomePage(value1, value2) {
        cy.get('.logo').click()
        cy.wait(3000)
        cy.url().should('eq', value1)
        cy.title().should('eq', value2)
    }
}

export default MyAccountPage