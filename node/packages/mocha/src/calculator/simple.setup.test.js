import Calculator from './calculator.js';
import { expect, assert } from 'chai';

describe('Calculator Tests', () => {

  let calculator = null;

  before(() => {
    calculator = new Calculator();
    console.log('BEFORE');
  });

  describe('Add operation test', () => {

    beforeEach(() => {
      console.log('BEFORE EACH');
    });

    it('should return 4 for 2 + 2', () => {
      expect(calculator.add(2, 2)).to.equal(4, 'not 2 + 2 = 4');
    });

    it('should return 5 for 3 + 2', () => {
      assert.equal(calculator.add(3, 2), 5);
    });

    afterEach(() => {});

  });

  after(() => {
    calculator = null;
  });

});