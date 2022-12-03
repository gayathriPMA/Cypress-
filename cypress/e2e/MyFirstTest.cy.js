



describe('MyFirstTest', () => {
    it('verift title-positive', () => {
        //steps
      cy.visit('https://pickmyad.com/')
      cy.title().should('eq','The best Influencer marketing platform - PickMyAd')
    })

    it('verify test-negative', () => {
        //steps
      cy.visit('https://pickmyad.com/')
      cy.title().should('eq','pickmyad')
    })
  })



  
