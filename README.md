# Sauce Demo Test Automation

Automated test suite for [Sauce Demo](https://www.saucedemo.com/) using Playwright with TypeScript.

## Prerequisites

- Node.js (LTS version)
- npm

## Setup

1. Install dependencies:

```bash
npm ci
```

2. Run type checks:
```bash
npx tsc -p tsconfig.json --noEmit
```

## Running Tests

Run all tests in headless mode:
```bash
npx playwright test
```

Run tests with UI:
```bash
npx playwright test --ui
```

Run specific test file:
```bash
npx playwright test tests/login.spec.ts
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── data/          # Test data and constants
│   ├── pages/         # Page Object Models
│   └── types/         # TypeScript types
├── tests/
│   ├── e2e/          # End-to-end tests
│   └── negative/     # Negative test scenarios
└── fixtures/         # Custom test fixtures
```

## Test Reports

- HTML Report: `playwright-report/`
- JSON Report: `ctrf/`

## CI/CD

Tests run automatically on pull requests to main/master branch. The workflow:

1. Sets up Node.js
2. Installs dependencies
3. Runs type checks
4. Executes tests
5. Publishes test report