Feature: Login Form Validation

    Background:
        Given I open the url "https://personal-budget-app.herokuapp.com"

    Scenario Outline: Unsuccessfull login #<number>
        When I login as '<username>' user with '<password>' password
        Then I expect that email placeholder is 'Ошибка! Введите email.'
            And I expect that password placeholder is 'Ошибка! Введите пароль.'
        Examples:
            | number | username | password |
            | 1      |          |          |
            | 2      | username |          |
            | 3      |          | password |
            | 4      | username | password |

    Scenario: Successfull login
        When I login as 'autotest_user@mail.ru' user with '12345user' password
        Then I should see 'autotest_user@mail.ru' username on my account page
