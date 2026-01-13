describe('Trigger Demo', () => {
    it('should understand various options of trigger methods', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // Trigger Focus and Click
        // cy.get('#hide-textbox').trigger('focus', 20, 40, {force: true})
        // cy.get('#hide-textbox').trigger('click', 20, 40, {force: true})

        // Trigger Mouseover
        cy.get('#mousehover').trigger('mouseover')
        cy.get("div.mouse-hover-content a[href='#top']").click({force: true})

        // Amazon Mouseover
        // cy.visit('https://www.amazon.com/')

        // Flipkart
        // cy.visit('https://www.flipkart.com/')
    })
})