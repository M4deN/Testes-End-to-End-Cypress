const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 9000,
  requestTimeout: 9000,
  video: true,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: '7kxmh2',
})