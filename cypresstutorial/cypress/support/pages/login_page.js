export class LoginPage {
    navigateToLogin() {
        cy.visit('https://www.letskodeit.com/login')

    }

    // getEmailField() {
    //     return cy.get('#email')
    // }

    enterEmailAddress(email) {
        cy.get('#email').type(email)
    }

    enterPassword(password) {
        cy.get('#login-password').type(password)
    }

    clickLoginButton() {
        cy.get('#login').click()
    }
    
    verifyEmailRequiredError() {
        cy.get('div[class="form-group"] span[class="error"]').should('have.text', 'The email field is required.')
    }

    verifyInvalidCredentialsError() {
        cy.get('#incorrectdetails').should('have.text', 'Incorrect login details. Please try again.')
    }

    loginToApp(email, password) {
        this.enterEmailAddress(email)
        this.enterPassword(password)
        this.clickLoginButton()
    }

    title() {
        return cy.title()
    }
}
export const login = new LoginPage()