const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,  // Enable video recording
  screenshotOnRunFailure: true,  // Capture screenshots on failure
  e2e: {
    setupNodeEvents(on, config) {
      // Add event listeners if needed
    },
    baseUrl: "https://rahulshettyacademy.com/loginpagePractise/#", // Change to your base URL
  },
});