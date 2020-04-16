import allureReporter from '@wdio/allure-reporter';

export function addText(value: string): void {
    allureReporter.addAttachment('Text', value);
}

export function addObject<T extends object>(value: T): void {
    allureReporter.addAttachment(
        'Object',
        JSON.stringify(value),
        'application/json'
    );
}

export function addScreenshot(path: string): void {
    allureReporter.addAttachment(
        'Screenshot',
        Buffer.from(path, 'base64'),
        'image/png'
    );
}
