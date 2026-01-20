const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
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
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
