
/**
 * Login Page Object
 * Encapsulates UI elements and actions related to the login screen.
 * This helps maintain separation between test logic and UI interaction.
 */

const BasePage = require('./base.page')

class LoginPage extends BasePage{

get email(){ return $('~input-email') }
get password(){ return $('~input-password') }
get loginButton(){ return $('~button-LOGIN') }

async login(user,pass){
await this.type(this.email,user)
await this.type(this.password,pass)
await this.click(this.loginButton)
}

}

module.exports = new LoginPage()
