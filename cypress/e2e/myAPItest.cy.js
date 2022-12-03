
    it('first test',()=>{
        cy.request("https://reqres.in/api/users?page=2").then((response)=>{
            expect(response.status).equals(200)
        })

    })