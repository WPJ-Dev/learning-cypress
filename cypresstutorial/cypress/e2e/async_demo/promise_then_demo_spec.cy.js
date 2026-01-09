describe('Cypress Promise Handling', () => {
    it('should understand promise handling in cypress', () => {

        cy.visit('https://www.letskodeit.com/practice').then(() => {
            cy.get('button')
        })

        cy.wait(5000)

        cy.get('#open-window-example-div')

        cy.get('#opentab')

        cy.get('#name').then(() => {
            console.log('promise testing...')
        })

    })
})