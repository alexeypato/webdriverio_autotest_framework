import Page from './Page';
import { setInputField } from '../support/action/setInputField';
import { waitForDisplayed } from '../support/action/waitForDisplayed';

class GoogleSearchPage extends Page {
    get searchInputLocator(): string {
        return '[name=q]';
    }
    get searchElementLocator(): string {
        return '//*[@id=\'search\']//div';
    }

    open(): void {
        super.open('https://google.com');
    }

    isSearchElementDisplayed(falseCase: string): boolean {
        return waitForDisplayed(this.searchElementLocator, falseCase);
    }

    setSearchField(method: 'add' | 'set', value: string): void {
        setInputField(method, value, this.searchInputLocator);
    }
}

export default new GoogleSearchPage();
