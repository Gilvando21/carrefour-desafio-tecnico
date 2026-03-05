
describe('Form scenarios', ()=>{

it('Fill text field', async ()=>{
const input = await $('~text-input')
await input.setValue('Automation Test')
})

it('Submit active button', async ()=>{
const button = await $('~button-Active')
await button.click()
})

})
