import Calculator from './calculator.js';
import { jest } from '@jest/globals';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test - spying', () => {

    beforeAll(() => {
       jest.spyOn(calculator, 'add');
    });

    test('should return 4 for 2 + 2', () => {
      expect(calculator.add).not.toHaveBeenCalled();
      expect(calculator.add(2, 2)).toEqual(4);
      expect(calculator.add(3, 2)).toEqual(5);
      expect(calculator.add).toHaveBeenCalled();
    });

    afterAll(() => {
      calculator.add.mockRestore();
    });

  });

});