const report = require('multiple-cucumber-html-reporter');

const customData = {
    title: 'Run info',
    data: [
        {
            label: 'Project',
            value: 'WebdriverIO Autotest Framework',
        },
        {
            label: 'Generated on:',
            value: new Date().toUTCString(),
        },
        {
            label: 'Reporter:',
            value:
                '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
                'target="_blank">multiple-cucumber-html-reporter</a>',
        },
    ],
};

report.generate({
    jsonDir: './report/cucumber/',
    reportPath: './report/cucumber/html',
    displayDuration: true,
    removeFolders: true,

    pageTitle: 'WebdriverIO Autotest Framework',
    reportName: 'WebdriverIO Autotest Framework',
    openReportInBrowser: true,
    pageFooter:
        '<div class="created-by"><p>Powered by &copy; Aliaksei Patotski</p></div>',

    customData: addCIMetadata(customData),
});

function addCIMetadata(customData) {
    customData.data = customData.data
        .concat(...fromAzureCI())
        .concat(...fromCircleCI())
        .concat(...fromGithubActions())
        .concat(...fromTravis());

    return customData;
}

function* fromAzureCI() {
    if (process.env.AZURECI) {
        yield { label: 'CI', value: 'AzureDevOpsCI' };
    }

    if (process.env.AZURE_BRANCH) {
        yield { label: 'Branch', value: process.env.AZURE_BRANCH };
    }

    if (process.env.AZURE_SHA1) {
        yield { label: 'Commit', value: process.env.AZURE_SHA1 };
    }

    if (process.env.AZURE_BUILD_NUM) {
        yield {
            label: 'Build',
            value: `<a href="${process.env.AZURE_BUILD_URL}" target="_blank">${process.env.AZURE_BUILD_NUM}</a>`,
        };
    }
}

function* fromCircleCI() {
    if (process.env.CIRCLECI) {
        yield { label: 'CI', value: 'CircleCI' };
    }

    if (process.env.CIRCLE_BRANCH) {
        yield { label: 'Branch', value: process.env.CIRCLE_BRANCH };
    }

    if (process.env.CIRCLE_SHA1) {
        yield { label: 'Commit', value: process.env.CIRCLE_SHA1 };
    }

    if (process.env.CIRCLE_BUILD_NUM) {
        yield {
            label: 'Build',
            value: `<a href="${process.env.CIRCLE_BUILD_URL}" target="_blank">${process.env.CIRCLE_BUILD_NUM}</a>`,
        };
    }
}

function* fromGithubActions() {
    if (process.env.GITHUB_ACTIONS) {
        yield { label: 'CI', value: 'Github Actions' };
    }

    if (process.env.GITHUB_REF) {
        yield {
            label: 'Branch',
            value: process.env.GITHUB_REF.replace('refs/heads/', ''),
        };
    }

    if (process.env.GITHUB_SHA) {
        yield { label: 'Commit', value: process.env.GITHUB_SHA };
    }

    if (process.env.GITHUB_RUN_NUMBER) {
        yield { label: 'Run', value: process.env.GITHUB_RUN_NUMBER };
    }
}

function* fromTravis() {
    if (process.env.TRAVIS) {
        yield { label: 'CI', value: 'TravisCI' };
    }

    if (process.env.TRAVIS_BRANCH) {
        yield { label: 'Branch', value: process.env.TRAVIS_BRANCH };
    }

    if (process.env.TRAVIS_COMMIT) {
        yield { label: 'Commit', value: process.env.TRAVIS_COMMIT };
    }

    if (process.env.TRAVIS_BUILD_NUMBER) {
        yield {
            label: 'Build',
            value: `<a href="${process.env.TRAVIS_BUILD_WEB_URL}" target="_blank">${process.env.TRAVIS_BUILD_NUMBER}</a>`,
        };
    }
}
