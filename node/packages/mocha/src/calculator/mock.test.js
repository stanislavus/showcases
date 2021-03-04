import Calculator from './calculator.js';
import { expect } from 'chai';
import sinon from 'sinon';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test - spying', () => {

    let mock = null;

    before(() => {
      mock = sinon.mock(calculator);
    });

    it('should return 4 for 2 + 2', () => {
      mock.expects('add').once();
      calculator.add(1, 2);
      mock.verify();
    });

    after(() => {
      mock.restore();
    });

  });

});