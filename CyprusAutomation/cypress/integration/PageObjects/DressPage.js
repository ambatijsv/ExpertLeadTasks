/// <reference types = "cypress"/>
class DressPage {

    clickOnDressTabButton() {
        cy.get('.sf-with-ul[title = "Dresses"]').last().click()
        cy.wait(3000)
        return this
    }

    validateMyAccountPageLanding(value1) {
        cy.title().should('eq', value1)
        cy.get('.content_scene_cat').should('be.visible')
    }

    verifyMoChecBoxGotSelected() {
        // categories check boxes
        cy.get('#layered_category_9').should('not.be.checked')
        cy.get('#layered_category_9').should('not.be.checked')
        cy.get('#layered_category_9').should('not.be.checked')

        // sizes check box
        cy.get('#layered_id_attribute_group_1').should('not.be.checked')
        cy.get('#layered_id_attribute_group_2').should('not.be.checked')
        cy.get('#layered_id_attribute_group_3').should('not.be.checked')

        // colors check boxes
        cy.get('#layered_id_attribute_group_7').should('not.be.checked')
        cy.get('#layered_id_attribute_group_8').should('not.be.checked')
        cy.get('#layered_id_attribute_group_9').should('not.be.checked')

        cy.get('#layered_id_attribute_group_13').should('not.be.checked')
        cy.get('#layered_id_attribute_group_14').should('not.be.checked')
        cy.get('#layered_id_attribute_group_15').should('not.be.checked')

        cy.get('#layered_id_attribute_group_16').should('not.be.checked')
        cy.get('#layered_id_attribute_group_24').should('not.be.checked')

        // compositions check boxes
        cy.get('#layered_id_feature_5').should('not.be.checked')
        cy.get('#layered_id_feature_1').should('not.be.checked')
        cy.get('#layered_id_feature_3').should('not.be.checked')

        // styles check boxes
        cy.get('#layered_id_feature_11').should('not.be.checked')
        cy.get('#layered_id_feature_16').should('not.be.checked')
        cy.get('#layered_id_feature_13').should('not.be.checked')

        // properties check boxes
        cy.get('#layered_id_feature_18').should('not.be.checked')
        cy.get('#layered_id_feature_21').should('not.be.checked')
        cy.get('#layered_id_feature_20').should('not.be.checked')
        cy.get('#layered_id_feature_19').should('not.be.checked')

        // availability check boxes
        cy.get('#layered_quantity_1').should('not.be.checked')

        // manufacturer check boxes
        cy.get('#layered_id_feature_1').should('not.be.checked')

        // condition check boxes
        cy.get('#layered_condition_new').should('not.be.checked')
    }

    verifyListViewItems() {
        //    cy.get('[class = "product_list]').should('be.visible')
        cy.get('[class = "icon-th-list"]').click()

    }

    verifyGridViewItems() {
        // cy.get('[class = "product_list"]').should('be.visible')

    }

    verifyPriceAvailableForAll() {
        cy.get('[class = "price product-price"][itemprop="price"]').should('be.visible')
    }

    clickOnSummmerDressesCheckBox() {
        cy.get('#layered_category_11').click()
        cy.wait(3000)
    }

}

export default DressPage