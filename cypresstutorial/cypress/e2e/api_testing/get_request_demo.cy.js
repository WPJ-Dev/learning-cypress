describe('API Testing Demo', () => {
    it('should validate get request', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('apiURL'),
            headers: {
                authorization: ''
            }
        }).then((res) => {
            console.log(res)
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            expect(res.body).has.length(10)
            expect(res.body[0]).has.property('name', 'Gajadhar Dwivedi Esq.')
            expect(res.body[0]).not.have.property('address')
        })
    })
})