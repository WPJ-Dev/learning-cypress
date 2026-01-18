describe('Fixtures Multiple Data Demo', () => {

    let globalData;

    it('before hook', () => {
        cy.fixture("search_course").then((data) => {
            globalData = data.testId1
        })
    })

    it('should run same test with multiple data', () => {
        globalData.forEach(testData => {
            cy.visit('https://www.letskodeit.com/courses')
            cy.get('input[placeholder="Search Course"]').type(testData.search_course)
            cy.get('button[class="find-course search-course"]').click()
            // cy.wait(5000)
            cy.get('h4[class="dynamic-heading"]').contains(testData.click_course).click()
            
        });
    })
})