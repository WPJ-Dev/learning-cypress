describe('Chain Commands Demo', () => {
    it('should learn chain commands details', () => {
        cy.visit('https://www.letskodeit.com/practice')
        
        cy.get('button', {timeout: 16000}).eq(1).should('contain', 'Open Window')

        cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')
    })
})