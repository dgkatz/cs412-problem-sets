let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

let { reverseString } = require('./PS1.P1');
let { evaluate } = require('./PS1.P2')


describe("reverseString", function() {
    it("reverses a string", function() {
        expect(reverseString("hello")).to.equal("olleh");
        expect(reverseString("olleh")).to.equal("hello");
        expect(reverseString("")).to.equal("");
    });
});

describe("evaluate", function() {
   it("evaluates a mathematical expression", function() {
      expect(evaluate("1+2")).to.be.an('function');
      expect(evaluate("1+2")()).to.be.an('number');
      expect(evaluate("1+2")()).to.equal(3);
      expect(evaluate("1-2")()).to.equal(-1);
      expect(evaluate("1*2")()).to.equal(2);
      expect(evaluate("1/2")()).to.equal(0.5);
      expect(evaluate("1^2")()).to.equal(1);
      expect(evaluate("1%2")()).to.equal(1);
   });
});