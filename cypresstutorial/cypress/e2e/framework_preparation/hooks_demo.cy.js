describe('Hooks Demo', () => {

    // before() Hook
    // It runs before starting the first test, 
    before('Optional text',() => {
        cy.log('Before all tests')
    })

    // after() Hook
    // It runs only once after completing all tests
    after('Optional text',() => {
        cy.log('After all tests')
    })

    // beforeEach() 
    // Runs before each test
    beforeEach('Optional text',() => {
        cy.log('Before each tests')
    })

    // afterEach() 
    // Runs after each test
    afterEach('Optional text',() => {
        cy.log('after each tests')
    })

    it('Test 1', () => {
        cy.log('Test 1')
    })

    it('Test 2', () => {
        cy.log('Test 2')
    })
})