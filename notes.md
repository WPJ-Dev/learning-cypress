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
|force|-> false| -> Forces the action, disables waiting element to become actionable|
|multiple|-> false| -> Serially click multiple elements|
|scrollBehavior| -> None| -> Viewport position to where an element should be scrolled before executing the command ('center', 'top', 'bottom', 'nearest', or false)
|altKey|-> false| -> Activates the alt key (option key for Max)|
|ctrlKey| -> false| -> Activates the control key|
|metaKey|-> false| -> Activates the meta key (Windows key or command key for Mac)|
|shiftKey|-> false| -> Activates the shift key|
