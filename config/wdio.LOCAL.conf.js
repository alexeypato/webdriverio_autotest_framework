var config = require('../wdio.conf.js').config;

config.maxInstances = 1;
config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--no-sandbox'],
    },
    'cjson:metadata': {
      device: process.env.SELENIUM_VERSION,
    },
  },
  {
    maxInstances: 1,
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: [],
    },
    acceptInsecureCerts: true,
    'cjson:metadata': {
      device: process.env.SELENIUM_VERSION,
    },
  },
];
config.services = ['selenium-standalone'];

exports.config = config;
