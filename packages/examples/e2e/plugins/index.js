const path = require("path");
const { startDevServer } = require("@cypress/vite-dev-server");

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, "..", "..", "vite.config.js"),
      },
    });
  });

  return {
    ...config,
    fixturesFolder: "e2e/fixtures",
    integrationFolder: "e2e/specs",
    screenshotsFolder: "e2e/screenshots",
    videosFolder: "e2e/videos",
    supportFile: "e2e/support/index.js",
  };
};
