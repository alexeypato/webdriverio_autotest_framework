import Page from './Page';

class AccountPage extends Page {
    open(): void {
        super.open('home');
    }

    getAccountUsernameLocator(username: string): string {
        return `//a[contains(@class,navbar)][text()='${username}']`;
    }
}

export default new AccountPage();
