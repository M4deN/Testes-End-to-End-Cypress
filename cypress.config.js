const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 50000,
    requestTimeout: 50000
  },
})