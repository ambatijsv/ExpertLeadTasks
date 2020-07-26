
/// <reference types = "cypress"/>
class HomePage {

    visit(value) {
        cy.visit(value)
        return this
    }

    clickSignButton() {
        cy.get('.header_user_info').click()
        cy.wait(5000)
        return this
    }

    homePageBackValidation() {
        cy.get('.sf-with-ul[title = "Women"]').should('be.visible')
        cy.get('.sf-with-ul[title = "Dresses"]').should('be.visible')
        cy.get('[title = "T-shirts"]').should('be.visible')

        cy.get('.active').should('be.visible')
        cy.get('.homefeatured[data-toggle="tab"]').should('be.visible')
    }
}

export default HomePage