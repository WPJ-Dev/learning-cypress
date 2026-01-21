## Introduction

---

Frontend automation testing tool for web apps

**Other tools**:
    - Selenium WebDriver
    - Protractor
    - WebDriverIO

**Why Cypress**:
It address key pain points devs and QA face when testing apps

#### Features
- Automatic Waiting 
    > handles syncing(implicit/explicit waiting) automatically
- Debuggability
    > errors & stack traces available in browser where tests are running
- Supports multiple types of testing
    > - e2e
    > - component
    > - integration
    > - unit

- Time travel
    > takes series of screenshots and video
        
- Network Traffic Control
    > allows for stubbing and avoiding need for certain connections(server)

- Smart Orchestration
    > Cloud platform that allows for 
    > - Parallelize test suites
    > - rerun failed test cases
    > - autocancel execution on failure

- Flake detection
    > helps discover unreliable tests

    [Full list](https://docs.cypress.io/guides/overview/why-cypress)

**Differeneces**:

    WebDriver Arch
    Selenium Client / Language Bindings via JSON http > Mulit Browser Drivers > Http interactions

    Cypress works on node.js invoking tested browser loading tess and app in seperate iframes

---

<table>
    <tr>
        <th>Pros:</th>
        <th>Cons:</th>
    </tr>
    <br>
    <tr>
        <td>Complete Framework</td>
        <td>IE and Safari not supported</td>
    </tr>
    <tr>
        <td>Fast(uses JavaScript)</td>
        <td>Asyncronous</td>
    </tr>
    <tr>
        <td>More Stabe</td>
        <td>No Mobile App Automation</td>
    </tr>
    <tr>
        <td>Less programming knowledge</td>
        <td>Single domain and single tab</td>
    </tr>
    <tr>
        <td>Test APIs</td>
        <td>Not friendly with iframes</td>
    </tr>
    <tr>
        <td>Mock APIs</td>
        <td></td>
    </tr>
</table>

---

## Tools and Installation

---

**Requirements**

 1. [Node.js](https://nodejs.org/en/download)
 2. Your favorite IDE
 3. [Cypress App](https://www.cypress.io/app#browser_testing)
    > npm install cypress --save-dev

**Running**
- Launch Cypress test runner via open command in cypress node modules directory
    > `./node_modules/.bin/cypress open`

    or

    > `npx cypress open`

- Offers e2e or component testing and will add associated files to project
- Select browser and choose between scaffolded specs or creating specs
- Specs are where tests are create

---

**Folder/File Structure**

1. Fixtures
    - Test data storage

2. E2E
    - Automation code/test cases

3. Support
    - Reusable scripts

4. Screenshots
    - Failed test screenshots

5. Videos
    - Automation execution videos

6. Download
    - Files downloaded during tests

7. Cypress.json
    - Cypress configuation

8. Package.json & Package.lock.json
    - Npm configuration

---

**First Test**

Describe()/Context() => Test Suite => Mocha 
it()/Specify() => test case => Mocha
expect() => Verification => Chai 

*Phases*

Behavior-driven development

1. Setup the application state => Given / Arrange

2. Take an action => When / Act

3. Verification => Then / Assert

---

**Running Tests with Commands**

Automation testing should run and be integrated with CI(Continuous Integration)/CD(Continuous Deployment) 

Examples:
1. Jenkins
2. Bamboo
3. Team City

Commands:
Executed from cypress folder(ex. ./node_modules/.bin/cypress) or via npx
> run 

- runs all tests
> --headed

- launches browser instance

> --browser

- selects browser to utilize (chorme/firefox/)edge

> --spec "\<filepath>"

- specific spec file(s) to run

---

**Intellisense**

Get intellisense suggestions if not working

Can place
```ts 
/// <reference types="Cypress" />
```

at the top of each file needed

or

Create an index.d.ts under support folder with
```ts
declare namespace Cypress {
   interface Chainable<Subject> {       
        /**         
        * Log in via UI
        * @example
        * cy.login(username: string, password: string)
        */
        login(): Chainable<any>

        /**
        * Log in via API
        * @example
        * cy.apiLogin()
        */
        apiLogin(): Chainable<any>
 
        /**
        * Wait for view to load
        * @example
        *  cy.waitForFirstLoad()
        */
        waitForFirstLoad(): Chainable<any>
        
        /** 
        * Log out
        * @example
        *  cy.logout()
        */
        logout(): Chainable<any>
    } 
}
```

Create tsconfig.json file under cypress folder with
```ts
{
    "compilerOptions": {
        "allowJS": true,
        "baseUrl": "../node_modules",
        "noEmit": true,
        "types": [
            "cypress"
        ]
    },
    "include": [
        "**/*.*"
    ]
}
```

---

**Locator Strategy & Selector Playground**

Locators are identifiers of web elements

*cypress only natively support css & jquery selectors
*cypress-xpath plugin allows for xpath selector support

***cypress-xpath plugin deprecated and not finding any current functionality***


#### Locators

- get()

Examples:

```js
    describe('Get Method And CSS Examples', () => {
        it('should learn get() method and some CSS examples', () => {
            cy.visit('https://www.letskodeit.com/practice')

            // Tag Name
            cy.get('button')

            // Id
            cy.get('#name')

            // Class Name
            cy.get('.inputs')

            // Attribute Value
            cy.get('[placeholder="Enter Your Name"]')
            
            // Class Value
            cy.get('[class="inputs displayed-class"]')
            
            // Tag Name and Attribute Value
            cy.get('input[id="name"]:visible')

            // Tag Name and Multiple Attribute Value
            cy.get('input[id="name"][placeholder="Enter Your Name"]')

            //Should attr / invoke alternative
        })
    })
```

cy.get(locator, options)

|Option|-> Default Value|-> Description|
|------|------|------|
|log|-> true|-> Enable/Disable command output on the console|
|timeout|-> defaultTimeout|-> Time to wait before throwing an exception|
|withinSubject|-> null|-> Specifies the node from where the element search should start|

---

- .within()

yields the same subject which was given to it from the previous command

```js
cy.get('#open-window-example-div').within(() => {
    cy.get('button')
})
```

---

- .find()

returns one or more elements based on the selector/locator
can be chained with other commands returning an element

```js
cy.get('#open-window-example-div').find('button').should('have.id', 'openwindow').click()

cy.get('#open-window-example-div').find('button', {log: false})

cy.get('#open-window-example-div').find('button', {timeout: 12000})
```

---

## A/Synchronous Nature



**Promise Handling**

- Pending: When execution starts but hasn't finished
- Rejection: Any execution failures
- Resolved: Upon successful execution

```js
cy.get('#name').then(() => {
    console.log('JS command')
})
```

---

## Assertions

Assertions validate the state of elements or any action we performed on the application we are testing. They can verify whether the element is visible or has a particualr state.

1. Implicit assertion are used on the object provided by the parent command.
    - should() & and() commands act on the subject returned by the previous command
    - When should we use?
        1. Assert multiple validations on the same element/subject.
        2. Change the subject before making assertions.

2. Explicit
    - expect() and assert()
    - When should we use?
        1. Perform some custom logic before making an assertion

---

**Web UI Interactions**

#### Click Method

*Syntax*:

1. => .click()
2. => .click(options)
3. => .click(position)
4. => .click(position, options)
5. => .click(x, y)
6. => .click(x, y, options)

*Positions*: the possible options are:

- center (Default)
- topLeft
- top
- topRight
- left
- right
- bottomLeft
- bottom
- bottomRight



*Cooridnates*:
 - x => The distans in pixels from the element's left to issue the click
 - y => The distance in pixels from the element's top to issue the click

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|
|multiple|-> false| -> Serially click multiple elements|
|scrollBehavior| -> None| -> Viewport position to where an element should be scrolled before executing the command ('center', 'top', 'bottom', 'nearest', or false)
|altKey|-> false| -> Activates the alt key (option key for Max)|
|ctrlKey| -> false| -> Activates the control key|
|metaKey|-> false| -> Activates the meta key (Windows key or command key for Mac)|
|shiftKey|-> false| -> Activates the shift key|

---

#### Double Click Method

*Syntax*:

1. => .dblclick()
2. => .dblclick(options)
3. => .dblclick(position)
4. => .dblclick(position, options)
5. => .dblclick(x, y)
6. => .dblclick(x, y, options)

---

#### Right Click Method

*Syntax*:

1. => .rightclick()
2. => .rightclick(options)
3. => .rightclick(position)
4. => .rightclick(position, options)
5. => .rightclick(x, y)
6. => .rightclick(x, y, options)

---

#### Type Method

*Syntax*:
1. -> .type(text)
2. -> .type(text, options)

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|
|delay| -> 10| -> Delay in milliseconds after each keypress|
|parseSpecialCharSequences| -> true| -> Parse special characters for strings surrounded by {}, such as {esc}. Set false to typ the literal|

---

#### Clear Method

*Syntax*:
1. -> .clear()
2. -> .clear(options)

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|

---

### Check/Uncheck Methods

*Syntax*:
1. -> check()
2. -> check(value)
3. -> check(values)
4. -> check(value, options)
5. -> check(values, options)

1. -> uncheck()
2. -> uncheck(value)
3. -> uncheck(values)
4. -> uncheck(value, options)
5. -> uncheck(values, options)

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|

---

### Select Method

*Syntax*:
1. -> .select(value)
2. -> .select(values)
3. -> .select(value, options)
4. -> .select(values, options)

Value -> One value to be selected

Values -> Multiple values to be selected

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|

---

### Trigger Method

*Syntax*:
1. -> .trigger(eventName)
2. -> .trigger(eventName, position)
3. -> .trigger(eventName, options)
4. -> .trigger(eventName, x, y)
5. -> .trigger(eventName, position, options)
6. -> .trigger(eventName, x, y, options)

*Options*:

|Option| -> Default Value| -> Description|
|------|------|------|
|log| -> true| -> Enable/Disable command output on the console|
|timeout| -> defaultTimeout| -> Time to wait before throwing an exception|
|force|-> false| -> Forces the action, disables waiting for element to become actionable|

Some mouse event examples:
- mouseover
- mousedown(does not work when CSS implementation)
- mouseup
- click

---

**Working with Element Lists**

### Element List Iteration

each command -> For Loop

wrap command -> Wrap JQuery eleemnts into Cypress Objects

How to freeze webpage for element inspection:
```js
setTimeout(function() {debugger;}, 6000)
```

---

**Working with Windows-Tabs-Popups-Frames**

### Windows

*Cypress works in a single window and does not encourage using new tabs or windows

### JS Alerts and Confirm Popups

JS Alerts -> It is not possible to inspect elements as they are not HTML pop-ups
Cypress handles clicking Ok button for JS Alert and Confirm popups

### IFrames

1. Iframe is an html document embedded in another html document
2. Look at the console tab to find iframe info
3. First find the iframe element
4. Then work within the callback function

---

**Framework Preparation**

### Hooks Explained

Hooks allow for actions completed before or after testing.

Provided by moka

Similar to Selenium annotations

```js
// before() Hook
    // It runs before starting the first test, 
    before('Optional text',() => {
        cy.log('Before all tests')
    })

    // after() Hook
    // It runs only once after completing all tests
    after('Optional text',() => {
        cy.log('After all tests')
    })

    // beforeEach() 
    // Runs before each test
    beforeEach('Optional text',() => {
        cy.log('Before each tests')
    })

    // afterEach() 
    // Runs after each test
    afterEach('Optional text',() => {
        cy.log('after each tests')
    })
```

---

### Include/Exclude tests

Individual tests can be skipped
```js
it.skip('Test 1', () => {
        cy.log('Test 1')
    })
```
Can select an individual tests to be run
```js
it.only('Test 1', () => {
        cy.log('Test 1')
    })
```

### Fixtures

Allows for a seperation of test data from test specs.

Data structures can be mocked with multiple encodings and file extensions.

Example:

> Test Spec:
>```js
>let globalData;
>
>it('before hook', () => {
>        cy.fixture("example").then((data) => {
>            globalData = data.testId2
>        })
>    })
>```
>
>fixtures/example.json
>```json
>{
>  "testId1":
>  {
>   "name": "Using fixtures to represent data",
>   "email": "hello@cypress.io",
>   "body": "Fixtures are a great way to mock data for responses to routes"
>  },
>  "testId2":
>  {
>    "username": "Test Username",
>    "password": "Test Password"
>  }
>}
>
>```

### Looping Tests/Data

You can run tests looping through data to test different data sets

```js
it('should run same test with multiple data', () => {
        globalData.forEach(testData => {
            cy.visit('https://www.letskodeit.com/courses')
            cy.get('input[placeholder="Search Course"]').type(testData.search_course)
            cy.get('button[class="find-course search-course"]').click()
            cy.get('h4[class="dynamic-heading"]').contains(testData.click_course).click()
            
        });
    })
```

---

### Custom Commands

Custom commands can be created in *support/commands.js* and used throughout specs
1. Limit custom commands to needs
2. Limit functionality
```js
it('should use custom command to login', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.login('test@email.com', 'abcabc')
    })
```
commands.js:
```js
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#login-password').type(password)
    cy.get('#login').click()
    cy.get('#dropdownMenu1').should('exist')
})
```

*Intellisense functionality can be added through index.d.ts

---

**Frameworks**

##### What is a framework?

A common Standard of doing things
- Easy to maintain and read
- Data Driven Tests
- Provides Meaningful Reporting
- Standard and Consistent Coding
- Encapsulation of UI interactions
- Maximize Code Re-Usability

##### What is a page object model?

A design pattern widely used to enhance test maintenance and reducing code duplications

- Wraps an HTML page with APIs that allow us to work with page elements.
- Should provide an easy to program interface
- Should encapsulate the code used to find and manipulate the page elements and data

---

**Reporting and Cloud Dashboard**

### Test Execution Screenshots and Videos

Screenshots of test failures and videos are automatically taken during spec executions via cli, but not when run via the GUI
- can be manually taken with ```cy.screenshot() ```

### Retry test cases

Retries by default are set to 0 and can be set in general or individually for cli vs gui runs. Only applies to test cases, not hooks.

### Awesome Reports Generation

Multiple plugins exist for report generation

Mocha Awesome Reports

---

### Cloud Dashboard

- Allows for an easy platform to run/record tests and share them with team members.
- Can reduce test runtime by providing parallelization
- Receive analytics on test runs.
- Helps validate projects code quality improvements.

---

**Advandced Features**

### Environment Variables

Can pass via cli 

```--env username=test@email.com,password=abcabc```

Paired with open cmd, can load environment specific instances

Additionally can run with modified env variables.
```--env username=$APP_USERNAME,password=$APP_PASSWORD```

cypress.config.js
```js
e2e: {
    baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      const username = process.env.APP_USERNAME
      const password = process.env.APP_PASSWORD

      config.env = {username, password}
      return config
    },
  },
```

### Experimental Features - Safari Webkit