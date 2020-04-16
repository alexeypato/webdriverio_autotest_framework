import { expect } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import SignInPage from '../../pageObjects/SignInPage';

@binding()
class SignInPagePageSteps {
    @given(/^I am on the Sign In page$/)
    public givenOnSignInPage(): void {
        SignInPage.open();
        const title = browser.getTitle();

        expect(title).to.equal('Личный бюджет');
    }

    @when(/^I login as '(.*)' user with '(.*)' password$/)
    public loginAs(username: string, password: string): void {
        SignInPage.login(username, password);
    }

    @then(/^I expect that (email|password) placeholder is( not)* '(.*)'$/)
    public checkInputPlaceholder(
        input: string,
        falseCase: string,
        placeholder: string
    ): void {
        const actualValue = SignInPage.getInputPlaceholder(input);
        if (falseCase) {
            expect(actualValue).to.not.equal(
                placeholder,
                `email placeholder should not equal "${placeholder}"`
            );
        } else {
            expect(actualValue).to.equal(
                placeholder,
                `email placeholder should equal "${placeholder}"`
            );
        }
    }
}

export = SignInPagePageSteps;
