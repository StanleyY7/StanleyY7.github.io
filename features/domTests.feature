Feature: Testing the rendering of the entire document

Scenario: Main should render
Given I am on the page
Then I should see the header
And I should see the "Main" link
And I should see the "About" link
And I should see the "project" link
And I should see the "skills" link
And I should see the "contact" link
And I should see "cover-heading"
And I should see "cover-text"
And I should see "cover-image"