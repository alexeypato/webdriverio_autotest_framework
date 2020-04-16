var config = require('./wdio.LOCAL.conf.js').config;

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
];

exports.config = config;
