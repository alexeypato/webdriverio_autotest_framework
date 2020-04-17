/* eslint-disable @typescript-eslint/camelcase */
export const capabilitiesChromeConfig = {
    maxInstances: process.env.DEBUG_TESTS === 'true' ? 1 : 5,
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--no-sandbox', '--disable-infobars'].concat(
            process.env.DEBUG_TESTS === 'true'
                ? [
                      // When debugging with VNC support headless mode is not enabled
                      // to allow viewing actions in the browser.
                  ]
                : ['--headless', '--disable-gpu']
        ),
        prefs: {
            // disable chrome's annoying password manager
            'disable-popup-blocking': true,
        },
    },
    'cjson:metadata': {
        device: process.env.SELENIUM_VERSION,
    },
};
