

describe('Test Link tree landing page',()=>{
    it('Launch link tree',()=>{
        cy.visit("https://linktr.ee/")
        cy.get(':nth-child(3) > .undefined > .styles__StyledForm-sc-11orpi3-0 > .dkGGZh')
        .type("gayathrivaratharajan")
        .get(':nth-child(3) > .undefined > .styles__StyledForm-sc-11orpi3-0 > .styles__Flex-sc-15sagwj-0 > .styles__StyledButton-sc-1e53l68-2 > .styles__Box-sc-c44u6a-0').click()

    })
})