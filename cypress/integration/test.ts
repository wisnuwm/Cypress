it('Test LOGIN', () => {
    //go to URL
    cy.visit('https://www.saucedemo.com/')
    //input username dan password
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    //click button login
    cy.get('#login-button').click()
    //assert
    cy.get('.title').should('be.visible')
    cy.get('.peek').should('be.visible')
    cy.contains('Products').should('contain','Products')
})