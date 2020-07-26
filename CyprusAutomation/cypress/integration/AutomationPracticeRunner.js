/// <reference types = "cypress"/>

import AccountCreationPage from './PageObjects/AccountCreationPage'
import AuthenticationPage from './PageObjects/AuthenticationPage'
import HomePage from './PageObjects/HomePage'
import MyAccountPage from './PageObjects/MyAccountPage'
import DressPage from './PageObjects/DressPage'

const authPage = new AuthenticationPage()
const homepge = new HomePage()
const accountCreationPage = new AccountCreationPage()
const myAccountPage = new MyAccountPage()
const dressPage = new DressPage()

describe('Automation Practice App Suite', function () {

    before(function () {
        homepge.visit(Cypress.config().appURL)
    })

    beforeEach(function () {
        cy.fixture('automationpractice').then(function (data) {
            this.data = data
        })
    })

    it('Verify Acccount Creation in Automation Practice App', function () {
        homepge.clickSignButton()

        authPage.enterEmail(this.data.email)
        authPage.clickOnCreateAnAcoountButton()

        accountCreationPage.clickOnTitleRadioButton()
        accountCreationPage.enterFirstName(this.data.firstName)
        accountCreationPage.enterLastName(this.data.lastName)
        accountCreationPage.enterPassword(this.data.password)
        accountCreationPage.enterCompanyName(this.data.company)
        accountCreationPage.enterAddressOne(this.data.address1)
        accountCreationPage.enterAddressTwo(this.data.address2)
        accountCreationPage.enterCity(this.data.city)
        accountCreationPage.enterState(this.data.state)
        accountCreationPage.enterPostalCode(this.data.zipCode)
        accountCreationPage.enterOtherInfo(this.data.otherInfo)
        accountCreationPage.enterPhoneNumber(this.data.homePhone)
        accountCreationPage.enterMobileNumber(this.data.mobilePhone)
        accountCreationPage.clickOnSubmitButton()

        myAccountPage.validateMyAccountPageLanding(this.data.myAccountPageTitle, this.data.firstName, this.data.lastName)

    })

    it('Verify My Account Page to Home Page Navigation', function () {
        myAccountPage.backNavigationToHomePage(Cypress.config().appURL, this.data.homePageTitle)
        homepge.homePageBackValidation()
    })

    it('Verify Dress Page', function () {
        dressPage.clickOnDressTabButton()
        dressPage.validateMyAccountPageLanding(this.data.dressesPageTitle)
        dressPage.verifyMoChecBoxGotSelected()
        dressPage.verifyGridViewItems()
    })

    it('Verify Dress Page and Grid View', function () {
        dressPage.verifyGridViewItems()
    })

    it('Verify Dress Page List View', function () {
        dressPage.verifyListViewItems()
        dressPage.verifyPriceAvailableForAll()
    })

    it('Verify Summwer Dresses filter in Dresses Page', function () {
        dressPage.verifyListViewItems()
        dressPage.verifyPriceAvailableForAll()
    })

})