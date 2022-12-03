

describe('Launch URL',()=>{
    it('Handle new tab',()=>{
        cy.visit("https://practice.automationbro.com/")
    cy
    .get('#contact-us')
    .invoke("removeAttr","target")
    .click()
    cy.get("h1").should("have.text","Contact")
    

    })
})