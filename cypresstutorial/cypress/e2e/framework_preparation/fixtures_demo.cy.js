describe('Fixtures Demo', () => {

    let globalData;

    it('before hook', () => {
        cy.fixture("example").then((data) => {
            globalData = data.testId2
        })
    })

    it('should understand how to use fixtures for reading data', () => {
        cy.visit('https://www.letskodeit.com/login');
        cy.get('#email').type(globalData.username);
        cy.get('#login-password').type(globalData.password);
    })
})