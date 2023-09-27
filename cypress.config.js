const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 9000,
    requestTimeout: 9000,
    video: true,
  },
})