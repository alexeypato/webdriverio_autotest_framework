import Page from './Page';

class SignInPage extends Page {
    get emailInput(): WebdriverIO.Element {
        return $('#input-email');
    }
    get passwordInput(): WebdriverIO.Element {
        return $('#input-password');
    }
    get signInButton(): WebdriverIO.Element {
        return $('#sign-in');
    }

    open(): void {
        super.open('sign-in');
    }

    getInputPlaceholder(input: string): string {
        const element =
            input === 'email' ? this.emailInput : this.passwordInput;
        return element.getAttribute('placeholder');
    }

    login(username, password): void {
        this.emailInput.setValue(username);
        this.passwordInput.setValue(password);
        this.signInButton.click();
    }
}

export default new SignInPage();
