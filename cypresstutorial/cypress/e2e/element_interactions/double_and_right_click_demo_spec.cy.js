describe('Double And RIght Click Demo', () => {
    it('should understand various options of double click and right click methods', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // Double Click Examples
        cy.get("#opentab").dblclick()
        // cy.get("#opentab").dblclick('topLeft')

        // .click() accepts an x and y coordinate
        // cy.get('#opentab').click(2, 3).click(6, 5)

        // Ignnore error checking
        // cy.get('#hide-textbox').dblclick()
        // cy.get('#displayed-text').dblclick({force: true})
        // cy.get('#displayed-text').dblclick({})

        // Click multiple elements
        // cy.get("input[type='checkbox'][name='cars']").dblclick({multiple: true})

        // Scroll Behavior
        // cy.get('#mousehover').dblclick({scrollBehavior: 'top'})

        // Right Click Examples
        // cy.get("#opentab").rightclick()

        // .click() accepts an x and y coordinate

        // Ignore error checking

    })
})