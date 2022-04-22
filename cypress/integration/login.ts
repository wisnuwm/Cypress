import {LoginPage} from "./pages/login_pages"

let loginPage = new LoginPage()

it('Test Sauce Demo', () => {
    loginPage.navigate('https://www.saucedemo.com/')
    loginPage.inputUsername('standard_user')
    loginPage.inputPassword('secret_sauce')
    loginPage.clickLogin()
    loginPage.assertLogin()
})