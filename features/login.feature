Feature: The webdriverio website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the home page
    When I login with username and password
    Then I should see the success message


