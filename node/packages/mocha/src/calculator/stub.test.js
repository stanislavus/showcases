import Calculator from './calculator.js';
import { expect } from 'chai';
import sinon from 'sinon';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test - stubbing', () => {

    before(() => {
      calculator.add = sinon.stub();
    });

    it('should return 4 for 2 + 2', () => {
      expect(calculator.add(2, 2)).to.equal(undefined);

      calculator.add.returns(4);
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(3, 2)).to.equal(4);

      expect(calculator.add.callCount).to.equal(3);
      calculator.add.reset();
      expect(calculator.add.callCount).to.equal(0);

      expect(calculator.add.called).to.equal(false);
      expect(calculator.add(2, 2)).to.equal(undefined);
      expect(calculator.add.called).to.equal(true);
      calculator.add.withArgs(2, 2).returns(4);
      calculator.add.withArgs(3, 2).returns(5);
      expect(calculator.add(2, 2)).to.equal(4);
      expect(calculator.add(3, 2)).to.equal(5);
      expect(calculator.add(3, 3)).to.equal(undefined);
      expect(calculator.add.withArgs(2, 2).calledTwice).to.equal(true);
      expect(calculator.add.withArgs(3, 2).calledOnce).to.equal(true);
      expect(calculator.add.withArgs(3, 3).calledOnce).to.equal(true);
      expect(calculator.add.withArgs(4, 3).called).to.equal(false);
      expect(calculator.add.called).to.equal(true);
    });

    after(() => {
      calculator.add.reset();
    });

  });

});