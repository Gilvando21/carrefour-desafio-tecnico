
const { expect } = require('chai')

describe('Navigation scenarios', ()=>{

it('Open Forms screen', async ()=>{
const forms = await $('~Forms')
await forms.click()
expect(await forms.isDisplayed()).to.equal(true)
})

it('Return to Home screen', async ()=>{
const home = await $('~Home')
await home.click()
expect(await home.isDisplayed()).to.equal(true)
})

})
