import Calculator from './calculator.js';
import { expect } from 'chai';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test', () => {
    it('should return 4 for 2 + 2', () => {
      expect(Boolean(calculator.add(2, 2))).to.equal(true);
    });
  });

});