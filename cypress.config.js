const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // Disables the support file
  },
  env: {
    i: 0 // set common environment variables here
  },
});