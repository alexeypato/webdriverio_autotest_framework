import { binding, then } from 'cucumber-tsflow';
import AccountPage from '../../pageObjects/AccountPage';
import { isDisplayed } from '../../support/check/isDisplayed';
import { waitForDisplayed } from '../../support/action/waitForDisplayed';

@binding()
class AccountPagePageSteps {
    @then(/^I should( not)* see '(.*)' username on my account page$/)
    public checkInputPlaceholder(falseCase: string, username: string): void {
        const locator = AccountPage.getAccountUsernameLocator(username);
        waitForDisplayed(locator, falseCase);
        isDisplayed(locator, falseCase);
    }
}

export = AccountPagePageSteps;
