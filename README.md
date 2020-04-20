# WebdriverIO Autotest Framework

[![tested with webdriver.io](https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906)](https://webdriver.io/)
[![CircleCI](https://circleci.com/gh/alexeypato/webdriverio_autotest_framework/tree/master.svg?style=svg)](https://circleci.com/gh/alexeypato/webdriverio_autotest_framework/tree/master)
[![Build Status](https://dev.azure.com/alexeypato/WebdriverIO%20Autotest%20Framework/_apis/build/status/alexeypato.webdriverio_autotest_framework?branchName=master)](https://dev.azure.com/alexeypato/WebdriverIO%20Autotest%20Framework/_build/latest?definitionId=2&branchName=master)

Project to write BDD tests with [Cucumber](https://cucumber.io/) and execute with [docker selenium](https://github.com/SeleniumHQ/docker-selenium).
Tests are written in an ordinary language that bridges the gap between business and technical people.
The docker selenium simplifies the setup and avoids any local installation of browser specific dependencies.

## Features

-   Simple setup, no need for local preinstalled Selenium Grid and browser drivers
-   Test with _Chrome_ and _Firefox_ with zero configuration
-   Integrated with [WebdriverIO v6](https://webdriver.io/)
-   Page Object Pattern example, BDD tests with [Cucumber](https://cucumber.io/docs/cucumber/) and over 150 predefined steps
-   Implement custom steps with [TypeScript](https://www.typescriptlang.org/)
-   Support for debugging tests
-   Detailed report generation ([Allure Report Example](https://demo.qameta.io/allure/))
-   Integration with CI tools ([CircleCI](https://circleci.com/docs/2.0/language-javascript/), [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops))

## Requirements

-   To run _Firefox_ and _Chrome_ browsers with docker selenium you need:

    -   `docker`
    -   `docker-compose`

-   Tests are executed with Node.js, requires:
    -   `Node.js` version 10 or higher
    -   `npm` version 6 or higher

## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

3. Run the tests and view the report:

```sh
# run tests
npm run test
```

```sh
# open the report
npm run report
```

To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```

Note that selenium containers can be started once and then used across multiple sessions of running and debugging tests.

## Test examples

| File                                     |                                                                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `./src/features/google.search.feature`   | An example of testing the Google search using Page Object pattern                                              |
| `./src/features/sample.snippets.feature` | Samples of using the existing test snippets. Credits [Christian Bromann](https://github.com/christian-bromann) |

## Adding tests

Tests are written using [Gherkin syntax](https://cucumber.io/docs/gherkin/) in a fashion that can be used as feature documentation:

```gherkin
# This is a single line comment
Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for unknown term
        When I set "google" to the search field
            And  I press "Enter"
        Then I expect that search element becomes displayed
```

All tests should be located in `./src/features/*` directory with extension `.feature` (configured in `./config/tests.config.ts`).  
For a list of predefined and supported steps see files:

-   `./src/steps/given.ts`
-   `./src/steps/when.ts`
-   `./src/steps/then.ts`.

The steps are inspired from [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate#list-of-predefined-steps) repository.

### Implementing custom steps

There are over 150 predefined steps, but in case you need an extra step you can add it in one of the `./src/steps` file.  
The snippets are defined using regular expressions. It allows to implement powerful and complex sentences.
Everything that's within `"([^"]*)?"` gets captured and appended to the callback.  
To access browser functionality, reference the global variable `browser` which is a _WebdriverIO_ browser instance.
See the [documentation](https://webdriver.io/docs/api.html) for a list of supported methods.  
Assertions are written using [chai](https://www.chaijs.com/).

### Browser specific tests

To run a test against a specific browser use predefined [tags](https://cucumber.io/docs/cucumber/api/#tags):

```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will run only in Chrome browser
    @OnlyChrome
    Scenario: Searching in chrome browser
    ...

    # This scenario will run only in Firefox browser
    @OnlyFirefox
    Scenario: Searching in Firefox browser
    ...
```

### Pending tests

To skip a test, use the `@Pending` tag:

```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will be skipped
    @Pending
    Scenario: Searching for WebdriverIO
    ...
```

### Verbose tests

Currently, a screenshot is attached only for a failing test. In case you want screenshots for a test regardless of its completion status,
use the `@Verbose` tag:

```gherkin
Feature: Performing a Google Search

    ...

    # A screenshot and additional test details will be attached to the report
    @Verbose
    Scenario: Searching for WebdriverIO
    ...
```

### Hooks

Hooks are blocks of code that can run at various points in the Cucumber execution cycle. It is possible to write conditional hooks.  
See examples of scenario hooks in `./src/steps/hooks.ts`. For a more advanced usage, configure hooks in
`./config/hooks.config.ts`.

You can customize existing hooks or implement your own.
See the WebdriverIO [documentation](<(https://webdriver.io/docs/options.html#hooks)>) about hooks.

## Configurations

### Environment variables

The configurable options are set in the `.env` file.

| Variable                       | Usage                                                                                                                                                                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SELENIUM_VERSION`             | Configure the version of selenium hub and nodes. Change this version if you want to run tests against a specific browser version. See the [list](https://github.com/SeleniumHQ/docker-selenium/releases) of available selenium releases and browser versions. |
| `SCREEN_WIDTH` `SCREEN_HEIGHT` | Configure browser window size.                                                                                                                                                                                                                                |

### WebdriverIO options

WebdriverIO specific [options](https://webdriver.io/docs/options.html) are all in `./config` directory.  
For example, to configure a default url change the `baseUrl` option in `./config/index.ts`:

```typescript
export const config = {
  runner: 'local',
  baseUrl: 'https://webdriver.io',
  ...
```

## Debugging tests

There is a `./.vscode/launch.json` file that has a debugger configuration for _Visual Studio Code_, but you can enable debugging in any other editor
that supports integration with Node.js debugger.

To debug a single feature file:

-   The `.feature` file to test is active in VS Code

-   From VS Code _Run and Debug_ menu select the _Debug current test_ option

The test will start and run only the current file. Once started you can navigate to any `.ts` file and place a breakpoint.

To debug all files follow the same steps but use the _Debug all tests_ option.

### Running tests

Tests by default run in _headless_ mode so that a browser window is not visually created.
To run the tests with enabled browser window:

```sh
# runs the tests without headless option
npm run test:run:local:chrome
or
npm run test:run:local:firefox
```

## License

[MIT](LICENSE)
