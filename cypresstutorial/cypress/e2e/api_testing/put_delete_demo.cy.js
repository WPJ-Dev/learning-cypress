import { util } from "../../support/utilities";

describe('API PUT/DELETE Testing Demo', () => {

    let apiURL = 'https://gorest.co.in/public/v2/users';
    let accessToken = '';
    let userId;
    let gd;
    before('', () => {
        cy.fixture('users_data').then((data) => {
            gd = data;
        }).then(() => {

        
            const userEmail = util.random_email();
            const reqBody = {
                name: gd.tid1.name,
                gender: gd.tid1.gender,
                email: userEmail,
                status: gd.tid1.status
            }
    
            cy.request({
                method: 'POST',
                url: apiURL,
                headers: {
                    'authorization': accessToken
                },
                body: reqBody
            }).then((res) => {
                expect(res.status).to.eq(201)
                userId = res.body.id;
            })
        })


    })
    
    it('should validate put', () => {
        const userEmail = util.random_email();

        const putReqBody = {
            name: gd.tid2.name,
            gender: gd.tid2.gender,
            email: userEmail,
            status: gd.tid2.status
        }

        cy.request({
                method: 'PUT',
                url: apiURL + '/' + userId,
                headers: {
                'authorization': accessToken
                },
                body: putReqBody
        }).then((res) => {
            expect(res.body.status).equal(putReqBody.status)
            expect(res.body.name).equal(putReqBody.name)
            expect(res.body.gender).equal(putReqBody.gender)
            expect(res.body.email).equal(putReqBody.email)
        })
    })

    it('should validate delete', () => {
        cy.request({
                method: 'DELETE',
                url: apiURL + '/' + userId,
                headers: {
                'authorization': accessToken
                },
        }).then((res) => {
            expect(res.status).equal(204)
        })
    })
})