describe('Providing empty data to input field', () => {
    it('should not login to app using empty username', () => {
        cy.visit('https://www.letskodeit.com/login')

        // Cypress won't allow the submitting of data withough a keystroke
        // cy.get('#email').type('')
        // utilizing {backspace} keystroke allow a work around to submit with no data
        // cy.get('#email').type('{backspace}')
        cy.get('#login').click()
    })
})