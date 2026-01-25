const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    username: 'test@email.com',
    password: 'abcabc',
    url: 'https://www.letskodeit.com',
    qaURL: '',
    apiURL: 'https://gorest.co.in/public/v2/users'
  },
  reporter: "cypress-mochawesome-reporter",
  retries: 1,
  reporterOptions: {
    // overwrite: false,
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    reportPageTitle: 'cypress-tutorial',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: true,
    videoOnFailOnly: false
  },
  e2e: {
    baseUrl: 'https://www.letskodeit.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
