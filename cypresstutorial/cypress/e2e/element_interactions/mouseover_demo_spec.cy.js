describe('Trigger Demo', () => {
    it('should understand various options of trigger methods', () => {
        // work around to handle css mouseover and click
        // by invoking parent element and selecting element
        // cy.visit('https://www.letskodeit.com/practice')
        // // cy.get('#mouseover').invoke('show')
        // cy.get('div[class="mouse-hover-content"]').invoke('show')
        // cy.get("div.mouse-hover-content a[href='#top']").click()

        // eBay Mouseover
        cy.visit('https://www.ebay.com')
        cy.get('#s0-1-4-8-13-0-dialog').find('div').find('ul').invoke('show')
        
    })
})