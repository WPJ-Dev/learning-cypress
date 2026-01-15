describe('Iframe Demo', () => {
    it('should work with element inside the iframe', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#courses-iframe').then(($frame) => {
            // work on content in iframe should be done within function
            const searchField = $frame.contents().find('input[id="search"]')
            cy.wrap(searchField).type('selenium')
        })

        // cy.get('input[id="search"').type('selenium')
    })
})