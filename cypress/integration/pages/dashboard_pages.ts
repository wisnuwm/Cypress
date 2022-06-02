export class DashboardPage{
    //element
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    //assert
    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
}