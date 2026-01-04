##Introduction

---

Frontend automation testing tool for web apps

**Other tools**:
    - Selenium WebDriver
    - Protractor
    - WebDriverIO

**Why Cypress**:
It address key pain points devs and QA face when testing apps

####Features
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