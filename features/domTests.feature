Feature: Testing the rendering of the entire document

Scenario: Global items should render
Given I am on the page
Then I should see all the icons

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

Scenario: About section should render
Given I am on the page
Then I should see the "about-section"
And I should see the "global-content-grid"
And I should see the "global-content-grid-social-container"

Scenario: Projects section should render
Given I am on the page
Then I should see the "projects-section" render
And I should see the "projects-heading" render
And I should see the "projects-grid" render
And I should see the "projects__grid--col-content" render

Scenario: Skills section should render
Given I am on the page
Then I should see the "skills-section" on the page
And I should see the "skills-heading" on the page
And I should see the "skills__grid" on the page
And I should see the "skills-grid-img" on the page

Scenario: Footer should render
Given I am on the page
Then I should see the footer image