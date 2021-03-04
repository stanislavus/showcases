import Calculator from './calculator.js';

const calculator = new Calculator();

describe('Calculator Tests', () => {

  describe('Add operation test', () => {
    test('should return 4 for 2 + 2', () => {
      expect(calculator.add(2, 2)).toEqual(4);
    });

    it('should return 5 for 3 + 2', () => {
      expect(calculator.add(3, 2)).toEqual(5);
    });
  });

});