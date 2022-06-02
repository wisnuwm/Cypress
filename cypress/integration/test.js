/// <reference types ="cypress"/>

//test case 1 untuk mencari wisnu munawar di google
it('Test Search Google', () => {
    cy.visit('https://www.google.com/') //visit ke google
    cy.get('.gLFyf').type('wisnu munawar{enter}') //typing wisnu munawar dan ENTER
    cy.contains('Wisnu Munawar - Software Quality Assurance Engineer').should('be.visible') //assert untuk verifikasi
})