$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "As a user I want to login into xyz bank website",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5542699700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 184615100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "bankManager Should Add Customer Successfully",
  "description": "",
  "id": "bank-test;bankmanager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click On \"Bank Manager Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click On the \"Add Customer\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click On \"Add Customer\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify message \"Customer added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"ok\" button on popup",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 274339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Customer",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheTab(String)"
});
formatter.result({
  "duration": 520598300,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 338579400,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterLastName()"
});
formatter.result({
  "duration": 158450200,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterPostCode()"
});
formatter.result({
  "duration": 168695000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Customer",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 114949500,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSeePopupDisplayed()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 18
    }
  ],
  "location": "BankSteps.iVerifyMessage(String)"
});
formatter.result({
  "duration": 32200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnPopup(String)"
});
formatter.result({
  "duration": 24120900,
  "status": "passed"
});
formatter.after({
  "duration": 799683700,
  "status": "passed"
});
formatter.before({
  "duration": 2921741200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on \"Deposit\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on the \"Withdrawl\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Enter amount 50 on the page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click next on \"Withdraw\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify that message \"Transaction Successful\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 435841100,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2191352500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 83530700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTabOnPage(String)"
});
formatter.result({
  "duration": 288780800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmount(int)"
});
formatter.result({
  "duration": 326913300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdrawl",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheTabOnPage(String)"
});
formatter.result({
  "duration": 2096763300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmountOnThePage(int)"
});
formatter.result({
  "duration": 2083020500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdraw",
      "offset": 17
    }
  ],
  "location": "BankSteps.iClickNextOnButton(String)"
});
formatter.result({
  "duration": 104012800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Successful",
      "offset": 23
    }
  ],
  "location": "BankSteps.iVerifyThatMessage(String)"
});
formatter.result({
  "duration": 4042142200,
  "error_message": "java.lang.AssertionError: error message displayed expected [Transaction successful] but found [Transaction Failed. You can not withdraw amount more than the balance.]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.bank.steps.BankSteps.iVerifyThatMessage(BankSteps.java:160)\r\n\tat ✽.Then I verify that message \"Transaction Successful\"(bank.feature:57)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 886639200,
  "status": "passed"
});
});