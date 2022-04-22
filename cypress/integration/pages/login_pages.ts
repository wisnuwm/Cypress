export class LoginPage{
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'


    navigate(url: string){
        cy.visit(url)
    }
    inputUsername(username: string){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){
        cy.get(this.btn_login).click()
    }
    assertLogin(){
        cy.get('.title').should('be.visible')
    }
}