const chai = require("chai");
const assert = chai.assert;
const luhnCheck = require("../luhn");

describe("luhnCheck", function() {
  it ("Should return true if number is 49927398716", function() {
    const number = 49927398716;
    assert.isTrue(luhnCheck(number));
  })
  it ("Should return false if number is 49927398717", function() {
    const number = 49927398717;
    assert.isFalse(luhnCheck(number));
  })
  it ("Should return false if number is 1234567812345678", function() {
    const number = 1234567812345678;
    assert.isFalse(luhnCheck(number));
  })
  it ("Should return true if number is 1234567812345670", function() {
    const number = 1234567812345670;
    assert.isTrue(luhnCheck(number));
  })
  it ("Should return true if number is '1234567812345670'", function() {
    const number = '1234567812345670';
    assert.isTrue(luhnCheck(number));
  })
  it ("Should return false if number is '1234567812345678'", function() {
    const number = 1234567812345678;
    assert.isFalse(luhnCheck(number));
  })
  it ("Should return 'Please enter a number' if number is 'string'", function() {
    const number = 'string';
    assert.isFalse(luhnCheck(number));
  })
})

