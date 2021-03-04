import Calculator from './calculator.js';
import { jest } from '@jest/globals';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test - mocking', () => {

    beforeAll(() => {
      calculator.add = jest.fn(() => {});
    });

    test('should return 4 for 2 + 2', () => {
      expect(calculator.add).not.toHaveBeenCalled();
      expect(calculator.add(2, 2)).toEqual(undefined);
      expect(calculator.add).toHaveBeenCalled();

      calculator.add = jest.fn(() => 4);
      expect(calculator.add(2, 2)).toEqual(4);
      expect(calculator.add(3, 2)).toEqual(4);

      calculator.add = jest.fn((a, b) => a + b);
      expect(calculator.add(2, 2)).toEqual(4);
      expect(calculator.add(3, 2)).toEqual(5);
      expect(jest.isMockFunction(calculator.add)).toEqual(true);
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

  });

});