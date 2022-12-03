/*describe('Myfirsttest',()=>{
it('Do nothing',()=>{
    expect(true).to.equal(true)
})
})*/

/*describe('Myfirsttest',()=>{
    it('Do nothing',()=>{
        expect(true).to.equal(false)
    })
    })*/
   // Visit a page
    /*describe('My First Test',()=>{
        it('Visit the kitchen sink',()=>{
            cy.visit('https://example.cypress.io')
        })
    })*/
    //Query for an element
    /*describe('My First Test',()=>{
        it('finds the content "type"',()=>{
            cy.visit('https://example.cypress.io')
            cy.contains('type')
            //cy.contains('hype')
        })
    })*/
    //Click an element
    /*describe('My First Test',()=>{
        it('click the link "type"',()=>{
            cy.visit('https://example.cypress.io')
            cy.contains('type').click()
        })
    })*/
    //Make an assertion
    /*describe('My First Test',()=>{
        it('click on type link navigate to new url',()=>{
            cy.visit('https://example.cypress.io')
            cy.contains('type').click()
            //should be on a new URL
            //includes '/commands/actions
            cy.url().should('include','/commands/actions')
        })
    })*/
    //Adding more commands and assertions
    describe('My First Test',()=>{
        it('Gets,Types and Asserts',()=>{
            cy.visit('https://example.cypress.io')
            cy.contains('type').click()
            //should be on a new URL
            //includes '/commands/actions
            cy.url()
            .should('include','/commands/actions')
            //get input and type into it
            //check the types value updated
            cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com')
        })
    })