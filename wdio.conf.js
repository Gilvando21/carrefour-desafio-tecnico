
const allure = require('@wdio/allure-reporter').default

exports.config = {

runner: 'local',
framework: 'mocha',

specs: ['./test/specs/**/*.js'],

reporters: [
'spec',
['allure', { outputDir: 'allure-results' }]
],

mochaOpts: {
ui: 'bdd',
timeout: 60000
},

services: ['appium'],

capabilities: [{
platformName: "Android",
'appium:deviceName': "Android Emulator",
'appium:automationName': "UiAutomator2",
'appium:app': "./app/native-demo-app.apk"
}],

afterTest: async function(test, context, { error }) {
if (error) {
await browser.takeScreenshot()
}
}

}
