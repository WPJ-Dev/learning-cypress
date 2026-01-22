describe('Alias and Get Command - API Testing Demo', () => {

    beforeEach('Initiate the main URL', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: ''
            }
        }).as('users')
    })

    it('should use alias to validate headers', () => {
        cy.get('@users').its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('should use alias to validate status', () => {
        cy.get('@users').its('status')
            .should('equal', 200)
    })

    it('should use alias to validate response body data', () => {
        cy.get('@users').its('body').
            then((res) => {
                expect(res[0]).has.property('name', 'Vimal Agarwal')
            })
    })

    it('should use alias and get command to verify api testing', () => {
        cy.get('@users').then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            expect(res.body).has.length(10)
            expect(res.body[0]).has.property('name', 'Vimal Agarwal')
            expect(res.body[0]).not.have.property('address')
        })
    })
})