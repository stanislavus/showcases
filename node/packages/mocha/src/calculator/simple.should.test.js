import Calculator from './calculator.js';
require("chai").should();

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test', () => {
    it('should return 3 for 1 + 2', () => {
      calculator.add(1, 2).should.equal(3);
    });
  });

});