describe('window',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('open in Mac-15',()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)

    })
    it('open in Mac-13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)

    })
    it('open in Ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(200)

    })
    it('open in IPhone6+',()=>{
        cy.viewport('iphone-6+')
        cy.screenshot()
        cy.wait(200)

    })
})