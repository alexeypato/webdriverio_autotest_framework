Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for unknown term
        When I set "124334sdgdsafgsdfg2323424" to the search field
            And  I press "Enter"
        Then I expect that search element becomes not displayed

    # The @Verbose tag adds a screenshot and additional test metadata.
    @Verbose
    Scenario Outline: Searching for term "<searchItem>"
        When I set "<searchItem>" to the search field
            And  I press "Enter"
        Then I expect that search element becomes displayed

        Examples:
            | searchItem         |
            | Selenium Webdriver |
            | Docker             |