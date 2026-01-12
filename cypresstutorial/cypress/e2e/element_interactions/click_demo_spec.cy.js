describe('Click Demo', () => {
    it('should understand various options of click method', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // Default: Click the center of the element
        // cy.get("#opentab").click()
        // cy.get("#opentab").click('topLeft')
        // cy.get("#opentab").click('top')

        // .click() accepts an x and y coordinate
        // cy.get('#opentab').click(2, 3).click(6, 5)

        // Ignnore error checking
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').click({force: true})
        // cy.get('#displayed-text').click({})

        // Click multiple elements
        // cy.get("input[type='checkbox'][name='cars']").click({multiple: true})

        // Scroll Behavior
        cy.get('#mousehover').click({scrollBehavior: 'top'})

    })
})