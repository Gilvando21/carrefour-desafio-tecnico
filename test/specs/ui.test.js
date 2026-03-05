
const { expect } = require('chai')

describe('UI validation', ()=>{

it('Validate Home title', async ()=>{
const home = await $('~Home')
expect(await home.isDisplayed()).to.equal(true)
})

it('Validate Login fields', async ()=>{
const email = await $('~input-email')
const pass = await $('~input-password')
expect(await email.isDisplayed()).to.equal(true)
expect(await pass.isDisplayed()).to.equal(true)
})

it('Validate navigation menu', async ()=>{
const menu = await $('~Menu')
expect(await menu.isDisplayed()).to.equal(true)
})

})
