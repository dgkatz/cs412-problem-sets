let chai = require('chai');
let expect = chai.expect;

let { reverseString } = require('./PS1.P1');
let { evaluate } = require('./PS1.P2');
let { callOn } = require('./PS1.P3');


describe("reverseString", () => {
    it("reverses a string", () => {
        expect(reverseString("hello")).to.equal("olleh");
        expect(reverseString("olleh")).to.equal("hello");
        expect(reverseString("")).to.equal("");
    });
});

describe("evaluate", () => {
   it("evaluates a mathematical expression", () => {
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

describe("callOn", () => {
    let splitAtC = (string) => string.split(/(?=c)/g);
    let capitalizeA = (string) => {
        return {
            originalString: string,
            numberReplaced: string.split("a").length - 1,
            modifiedString: string.replace("a", "A"),
            length: string.length
        };
    };
    let inputString = "supercalifragilisticexpialidocious";
    it("calls given function on given string", () => {
       expect(callOn(inputString, splitAtC)).to.eql([ 'super', 'califragilisti', 'cexpialido', 'cious']);
       expect(callOn(inputString, capitalizeA)).to.eql({
           originalString: 'supercalifragilisticexpialidocious',
           numberReplaced: 3,
           modifiedString: 'supercAlifragilisticexpialidocious',
           length: 34
       })
   });
});