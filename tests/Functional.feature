Feature: Validating user behavior
  As an developer, I want to validate that all user journeys are working fine

  @All
  Scenario: I get a response
    When I GET /get
    Then response code should be 200

  @All @Travel
  Scenario: I send response
    Given I set body to {"name": "John Doe"}
    When I POST to /post
    Then response code should be 200
