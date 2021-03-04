import Calculator from './calculator.js';
import { expect } from 'chai';
import sinon from 'sinon';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test - spying', () => {

    before(() => {
      sinon.spy(calculator, 'add');
    });

    it('should return 4 for 2 + 2', () => {
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(3, 2)).to.equal(5);
      expect(calculator.add.withArgs(2, 2).calledOnce).to.equal(true);
      expect(calculator.add.withArgs(3, 2).calledOnce).to.equal(true);
      expect(calculator.add.withArgs(3, 3).called).to.equal(false);
    });

    after(() => {
      calculator.add.restore();
    });

  });

});