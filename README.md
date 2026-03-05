
# Mobile Automation Technical Test

Mobile automation project developed using WebdriverIO, Appium, Mocha and Chai.

## Technologies
JavaScript  
WebdriverIO  
Appium  
Mocha  
Chai  
Allure Report  

## Project Structure

test/specs -> test scenarios  
test/pageobjects -> page objects for UI interaction  
test/utils -> reusable utilities  
data -> test data used for data-driven execution  

## Test Strategy

The automated tests focus on validating the main user flows of the application:

• Authentication (login scenarios)  
• Navigation between screens  
• Form interaction  
• UI element validation  

The tests follow the Page Object Model pattern to improve maintainability
and separation between test logic and UI interaction.

Test data is externalized using JSON files to support data-driven execution.

## Test Coverage

Login scenarios  
Navigation between screens  
Form interaction  
UI validation  

Total: 10 automated scenarios.

## Installation

npm install

## Run Tests

npx wdio run wdio.conf.js

## Reports

npm run report

## CI/CD

Pipeline configuration included in `.gitlab-ci.yml`.

## Author

Gilvando De Sena Matos
