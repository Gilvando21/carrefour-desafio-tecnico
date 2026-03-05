
class BasePage {

async click(element){
await element.waitForDisplayed()
await element.click()
}

async type(element,value){
await element.waitForDisplayed()
await element.setValue(value)
}

async isVisible(element){
await element.waitForDisplayed()
return element.isDisplayed()
}

}

module.exports = BasePage
