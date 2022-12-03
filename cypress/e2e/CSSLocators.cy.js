describe('CSSLocators', () => {
    it("csslocators", () => {
        cy.visit("https://www.amazon.in/ref=nav_logo");
        //cy.get("#twotabsearchtextbox").type("kurti")//id
        cy.get(".nav-search-field").type("kurti")
        cy.get("[type='submit']").click()//attribute
        cy.get(".a-color-state.a-text-bold").contains("kurti")//Assertion

    })
})