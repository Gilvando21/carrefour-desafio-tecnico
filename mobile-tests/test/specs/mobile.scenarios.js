
const { expect } = require('chai')

describe('Mobile App Scenarios', () => {

it('1 - Validate login screen elements', async ()=>{
const email = await $('~input-email')
const password = await $('~input-password')
expect(await email.isDisplayed()).to.equal(true)
expect(await password.isDisplayed()).to.equal(true)
})

it('2 - Validate login button visible', async ()=>{
const button = await $('~button-LOGIN')
expect(await button.isDisplayed()).to.equal(true)
})

it('3 - Attempt login with valid credentials', async ()=>{
const email = await $('~input-email')
const password = await $('~input-password')
await email.setValue('test@test.com')
await password.setValue('123456')
})

it('4 - Attempt login with invalid credentials', async ()=>{
const email = await $('~input-email')
const password = await $('~input-password')
await email.setValue('invalid@test.com')
await password.setValue('wrong')
})

it('5 - Navigate to Forms screen', async ()=>{
const forms = await $('~Forms')
await forms.click()
})

it('6 - Validate Forms screen loaded', async ()=>{
const formsTitle = await $('~Forms')
expect(await formsTitle.isDisplayed()).to.equal(true)
})

it('7 - Fill input field', async ()=>{
const input = await $('~text-input')
await input.setValue('QA Automation Test')
})

it('8 - Toggle switch element', async ()=>{
const toggle = await $('~switch')
await toggle.click()
})

it('9 - Validate active button', async ()=>{
const active = await $('~button-Active')
expect(await active.isDisplayed()).to.equal(true)
})

it('10 - Validate inactive button', async ()=>{
const inactive = await $('~button-Inactive')
expect(await inactive.isDisplayed()).to.equal(true)
})

})
