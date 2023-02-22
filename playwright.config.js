/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
  testDir: "tests",
  reporter: "html",
  use: {
    trace: "retain-on-failure",
  },
};

export default config;
