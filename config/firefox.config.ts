export const capabilitiesFirefoxConfig = {
    maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 5,
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: [].concat(
            process.env.DEBUG_TESTS === 'true'
                ? [
                      // When debugging with VNC support headless mode is not enabled
                      // to allow viewing actions in the browser.
                  ]
                : ['-headless']
        ),
    },
    acceptInsecureCerts: true,
    'cjson:metadata': {
        device: process.env.SELENIUM_VERSION,
    },
};
