import { util } from "../../support/utilities";

describe('API Testing Demo', () => {
    
    let gd;

    before('', () => {
        cy.fixture('users_data').then((data) => {
            gd = data.tid1
        })
    })

    it.skip('should validate post request', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('apiURL'),
            headers: {
                authorization: ''
            },
            body: {
                name: "Somne Jones",
                gender: "male",
                email: "somne.jones01@email.com",
                status: "active"
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq("Somne Jones")
            expect(res.body.name).to.equal("Somne Jones")
            expect(res.body).has.property('name', 'Somne Jones')
            expect(res.body.email).to.equal('somne.jones01@email.com')
        })
    })

    it.skip('should validate post request - request variable', () => {
        const reqBody = {
            name: "Somne Jones",
            gender: "male",
            email: "somne.jones02@email.com",
            status: "active"
        }

        cy.request({
            method: 'POST',
            url: Cypress.env('apiURL'),
            headers: {
                authorization: Cypress.env('GO_REST_API_KEY')
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq("Somne Jones")
            expect(res.body.name).to.equal("Somne Jones")
            expect(res.body).has.property('name', 'Somne Jones')
            expect(res.body.email).to.equal('somne.jones02@email.com')
        })
    })

    it.skip('should validate post request - fixture data', () => {
        const reqBody = {
            name: gd.name,
            gender: gd.gender,
            email: gd.email,
            status: gd.status
        }

        cy.request({
            method: 'POST',
            url: Cypress.env('apiURL'),
            headers: {
                authorization: Cypress.env('GO_REST_API_KEY')
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq("Somne Jones")
            expect(res.body.name).to.equal("Somne Jones")
            expect(res.body).has.property('name', 'Somne Jones')
            expect(res.body.email).to.equal('somne.jones03@email.com')
        })
    })

    it('should validate post request - randomize request', () => {
        const reqBody = {
            name: gd.name,
            gender: gd.gender,
            email: util.random_email(),
            status: gd.status
        }

        cy.request({
            method: 'POST',
            url: Cypress.env('apiURL'),
            headers: {
<<<<<<< HEAD
                authorization: ''
=======
                authorization: Cypress.env('GO_REST_API_KEY')
>>>>>>> 6f9e016 (delete validation - should try get?)
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq(reqBody.name)
            expect(res.body.name).to.equal(reqBody.name)
            expect(res.body).has.property('name', reqBody.name)
            expect(res.body.email).to.equal(reqBody.email)
        })
    })
})