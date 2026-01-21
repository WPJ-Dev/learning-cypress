describe('Environment Variables Demo', () => {

    const cred = {
        user: Cypress.env('username'),
        password: Cypress.env('password')
    }
    it('should login to app using valid credentials', () => {
        cy.visit('/login')
        // cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.login(cred.user, cred.password)
        cy.logout()
    })
})