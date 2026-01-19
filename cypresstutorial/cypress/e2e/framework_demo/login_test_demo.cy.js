import { login } from "../../support/pages/login_page"

describe('No Framework Test Suite', () => {

    let gd;
    
    before(() => {
        cy.fixture('login_data').then((data) => {
            gd = data;
        })
    })

    beforeEach(() => {
        login.navigateToLogin()
    })

    it('should login to app using valid credentials', () => {
        cy.login(gd.testId1.username, gd.testId1.password)
        cy.logout()
    })

    it('should not login to app using empty username', () => {
        login.loginToApp(gd.testId2.username, gd.testId2.password)
        login.verifyEmailRequiredError()
    })

    it('should login to app using invalid credentials', () => {
        login.loginToApp(gd.testId3.username, gd.testId3.password)
        login.verifyInvalidCredentialsError()
    })
})