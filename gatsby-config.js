// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateConfig } = require('gatsby-plugin-ts-config');

const config = generateConfig({
  configDir: '.gatsby',
  tsNode: true
});

module.exports = config;
