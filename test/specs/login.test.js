
const loginPage = require('../pageobjects/login.page')
const { getUsers } = require('../utils/testData')
const { expect } = require('chai')

describe('Login scenarios', () => {

getUsers().forEach((user)=>{

it(`Login attempt with ${user.email}`, async ()=>{
await loginPage.login(user.email,user.password)
})

})

it('Login with empty credentials', async ()=>{
await loginPage.login('','')
})

})
