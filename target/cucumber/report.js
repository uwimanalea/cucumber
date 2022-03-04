$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 3,
  "name": "TechFios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LoginFeature"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login with incorrect username(other)",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters userName as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;1"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ],
      "line": 17,
      "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 18,
      "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;3"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ],
      "line": 19,
      "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;4"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 20,
      "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2372402700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1190013900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with incorrect username(other)",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters userName as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_userName_as(String)"
});
formatter.result({
  "duration": 3113766500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3082081300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_clicks_sign_button()"
});
formatter.result({
  "duration": 4306281700,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 7697800,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.TechfiosStepDefinition.user_should_land_on_dashboard_page(TechfiosStepDefinition.java:53)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 655787100,
  "status": "passed"
});
formatter.before({
  "duration": 1345578600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1137729600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with incorrect username(other)",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters userName as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters password as \"abc124\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_userName_as(String)"
});
formatter.result({
  "duration": 3082516900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc124",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3070972100,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_clicks_sign_button()"
});
formatter.result({
  "duration": 4516846200,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 5132000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.TechfiosStepDefinition.user_should_land_on_dashboard_page(TechfiosStepDefinition.java:53)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 646015300,
  "status": "passed"
});
formatter.before({
  "duration": 1332225900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1081538600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login with incorrect username(other)",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters userName as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_userName_as(String)"
});
formatter.result({
  "duration": 3087074600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3079836900,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_clicks_sign_button()"
});
formatter.result({
  "duration": 4454369400,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 5733000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.TechfiosStepDefinition.user_should_land_on_dashboard_page(TechfiosStepDefinition.java:53)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 650227500,
  "status": "passed"
});
formatter.before({
  "duration": 1353044200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TechFios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefinition.user_is_on_TechFios_login_page()"
});
formatter.result({
  "duration": 1037907900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login with incorrect username(other)",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-incorrect-username(other);;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario1"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters userName as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks sign button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_userName_as(String)"
});
formatter.result({
  "duration": 3097212300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3081205300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_clicks_sign_button()"
});
formatter.result({
  "duration": 4738688100,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 5040800,
  "status": "passed"
});
formatter.after({
  "duration": 656264000,
  "status": "passed"
});
});