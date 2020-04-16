export const capabilitiesChromeConfig = {
    maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 5,
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--no-sandbox'].concat(
            process.env.DEBUG_TESTS === 'true'
                ? [
                      // When debugging with VNC support headless mode is not enabled
                      // to allow viewing actions in the browser.
                  ]
                : ['--headless', '--disable-gpu']
        ),
    },
    'cjson:metadata': {
        device: process.env.SELENIUM_VERSION,
    },
};
