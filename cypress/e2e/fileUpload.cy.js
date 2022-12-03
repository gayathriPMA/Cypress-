


describe('FileUplload', () => {
    it.skip('simple file upload', () => {
        //visiting website
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        //declaring fileName
        const fileName = 'demo.jpg'
        //attaching file 
        cy.get('[name="userfile"]').attachFile(fileName);//with attribute

    })
    it.skip('drag and drop', () => {
        //visit website
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')

        const fileName = 'demo.jpg'
        //drag and drop file
        cy.get('#file').attachFile(fileName);//with id
        //success message after attachment
        cy.get('.box__success').should('have.text', 'Done! Upload more?')//with class

    })
    it('multi file upload', () => {
        //visit website
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const fileName0 = 'demo.jpg'
        const fileName1 = 'example.json'
        const fileName2 = 'demo.txt'
        //upload multiple file
        cy.get('#filesToUpload')
            .attachFile(fileName0)//with id
           .attachFile(fileName1)
           .attachFile(fileName2)
        //success message after attachment
        cy.get('p:nth-child(6) > strong').should('have.text', 'Files You Selected:')//copy selector

    })
   it.skip('Change file name while uploading', () => {
        //visit website
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const fileName0 = 'demo.jpg'
        //overriding file
        cy.get('#filesToUpload').attachFile({ filePath: fileName0, fileName: 'user.json' });//changing file name

        //success message after attachment
        cy.get('#main > div > p:nth-child(6) > strong').should('have.text', 'Files You Selected:')
    })
})