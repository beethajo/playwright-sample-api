# Name of the repository

playwright-sample-api

## Content

In this file you will find information about this project like: installation, structure and how to run the tests.

### What is this repository for?

This repository serves the purpose of creating test scripts for the RL API

### How do I get set up?

-   Clone or download the project
-   Extract and open in the VS-Code
-   `npm i` to install the dependencies
-   `npm install -D @playwright/test@latest` to install playwright

### How to run
-   To run the tests on local pc:  `npx cross-env playwright test`
-   To run the tests on dev environment: `npm run test:dev`
-   To run the tests on staging environment: `npm run test:staging`
-   To run a specific tag: `npx playwright test --grep @tagname`
-   To run a test on specific branch `BRANCH_NAME=release-greensite npx playwright test --grep @tagname`


### Project structure

-   In the tests folder for each groupings of endpoints a folder must be created under which spec.ts files will be created for each individual endpoint.

### Additional paragraph

-   API information can be found in https://restful-booker.herokuapp.com/apidoc/index.html#

### Checks if files are formatted

`pnpm prettier --check .`

### Formats all the files

`pnpm prettier --write .`

### run linter

`npm run lint`
