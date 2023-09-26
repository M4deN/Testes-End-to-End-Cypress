const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 6000,
    requestTimeout: 6000
  },
})