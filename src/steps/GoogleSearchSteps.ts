import { binding, then, when } from 'cucumber-tsflow';
import GoogleSearchPage from '../pageObjects/GoogleSearchPage';
import { assert } from 'chai';

@binding()
class GoogleSearchSteps {
    @when(/^I (add|set) "([^"]*)?" to the search field$/)
    public setSearchField(method: 'add' | 'set', value: string): void {
        GoogleSearchPage.setSearchField(method, value);
    }

    @then(/^I expect that search element becomes( not)* displayed$/)
    public expectElementsDisplayed(falseCase: string): void {
        const isDisplayed = GoogleSearchPage.isSearchElementDisplayed(
            falseCase
        );
        assert.isTrue(
            isDisplayed,
            `Search element becomes${falseCase ? falseCase : ''} displayed`
        );
    }
}

export = GoogleSearchSteps;
