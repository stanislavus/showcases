import Calculator from './calculator.js';

const calculator = new Calculator();

const add = (timeout = 1000) => {
  return new Promise(resolve => setTimeout(() => resolve(calculator.add(2, 2)), timeout))
};

describe('Calculator Tests', () => {

  describe('Add operation test', () => {
    test('should return 4 for 2 + 2', (done) => {
      add().then(result => {
        expect(result).toEqual(4);
        done();
      });
    });

    test('should return 4 for 2 + 2 with async/await', async () => {
      expect(await add()).toEqual(4);
    });

    test('should return 4 for 2 + 2 for bigger timeout', function(done) {
      add(2500).then(result => {
        expect(result).toEqual(4);
        done();
      });
    }, 3000);
  });

});