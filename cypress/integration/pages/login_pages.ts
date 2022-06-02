import { JsxEmit } from "typescript"

export class LoginPage{
    //element
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'
    //navigate to url
    navigate(url: string){
        cy.visit(url)
    }
    //input username and password
    inputUsername(username: string){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){
        cy.get(this.txt_password).type(password)
    }
    //click login
    clickLogin(){
        cy.get(this.btn_login).click()
    }
    //assert
    assertLogin(){
        cy.get('.title').should('be.visible')
        cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')
    }
    assertLoginFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
    //navigate, input username and password, and click login
    login(url : string,username : string,password : string){
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}