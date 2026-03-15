
# QA Automation Framework – Carrefour Technical Challenge

![Node.js](https://img.shields.io/badge/node.js-18-green)  
![WebdriverIO](https://img.shields.io/badge/webdriverio-v8-blue)  
![Appium](https://img.shields.io/badge/appium-mobile-orange)  
![Automation](https://img.shields.io/badge/test-automation-brightgreen)

Automation framework developed to validate **API and Mobile functionalities** following modern QA Automation practices.

The project was created to attend the requirements of the **Carrefour QA Automation Technical Challenge**, implementing automated tests for a REST API and a mobile application using JavaScript-based tools.

---

# Tech Stack

## API Automation
- Node.js
- Supertest
- Mocha
- Chai
- AJV (Schema Validation)
- Faker (Dynamic Test Data)

## Mobile Automation
- WebdriverIO
- Appium
- Mocha
- Chai
- Page Object Model (POM)

## CI/CD
- GitLab CI Pipeline

---

# Test Coverage

## API Tests

The API automation validates a user management REST API with the following coverage:

- User CRUD validation
- JWT Authentication
- Header validation
- Schema validation using AJV
- Positive scenarios
- Negative scenarios
- Dynamic test data generation using Faker
- Service layer abstraction for API calls

---

## Mobile Tests

Mobile automation implemented using **WebdriverIO + Appium** following the **Page Object Model pattern**.

Coverage includes:

- Login interactions
- UI element interaction
- Navigation validation
- Data-driven tests
- Screenshot evidence on failure
- Allure report integration

---

# Project Structure

carrefour-desafio-tecnico
│
├── api-tests
│   ├── auth        → Authentication and token management
│   ├── data        → Test data builders
│   ├── schemas     → API contract validation
│   ├── services    → API service layer
│   └── tests       → Automated API test cases
│
├── mobile-tests
│   ├── pages       → Page Object Model implementation
│   ├── specs       → Mobile test scenarios
│   ├── data        → Data-driven test files
│   └── config      → WebdriverIO configuration
│
├── package.json
├── .gitlab-ci.yml
└── README.md

---

# Setup

Clone the repository:

git clone https://github.com/Gilvando21/carrefour-desafio-tecnico.git

Navigate to the project folder:

cd carrefour-desafio-tecnico

Install dependencies:

npm run install:all

---

# Running the Tests

Run API tests:

npm run test:api

Run Mobile tests:

npm run test:mobile

---

# Reports

Mobile tests generate **Allure reports** with screenshots and execution details.

Artifacts are configured to be stored during CI execution.

---

# CI/CD

The project includes a **GitLab CI pipeline** that automates test execution and stores test artifacts.

Pipeline stages:

- Dependency installation
- API test execution
- Mobile test execution
- Artifact storage

---

# Author

Gilvando De Sena Matos  
QA Automation Engineer
