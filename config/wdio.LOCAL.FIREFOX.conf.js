var config = require('./wdio.LOCAL.conf.js').config;

config.capabilities = [
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

exports.config = config;
