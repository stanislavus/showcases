import Calculator from './calculator.js';

describe('Calculator Tests', () => {

  let calculator = null;

  beforeAll(() => {
    calculator = new Calculator();
  });

  describe('Add operation test', () => {

    beforeEach(() => {});

    test('should return 4 for 2 + 2', () => {
      expect(calculator.add(2, 2)).toEqual(4);
    });

    afterEach(() => {});

  });

  afterAll(() => {
    calculator = null;
  });

});