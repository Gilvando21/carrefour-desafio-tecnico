
exports.config = {
  runner: 'local',
  framework: 'mocha',
  specs: ['./test/specs/**/*.js'],
  services: ['appium'],

  capabilities: [
    {
      platformName: "Android",
      'appium:deviceName': "Android Emulator",
      'appium:automationName': "UiAutomator2"
    },
    {
      platformName: "iOS",
      'appium:deviceName': "iPhone 14",
      'appium:automationName': "XCUITest"
    }
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
