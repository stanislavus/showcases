import Calculator from './calculator.js';
import { expect } from 'chai';

const calculator = new Calculator();

const add = (timeout = 1000) => {
  return new Promise(resolve => setTimeout(() => resolve(calculator.add(2, 2)), timeout))
};

describe('Calculator Tests', () => {

  describe('Add operation test', () => {
    it('should return 4 for 2 + 2', (done) => {
      add().then(result => {
        expect(result).to.equal(4, 'not 2 + 2 = 4');
        done();
      });
    });

    it('should return 4 for 2 + 2 with async/await', async () => {
      expect(await add()).to.equal(4, 'not 2 + 2 = 4');
    });

    it('should return 4 for 2 + 2 for bigger timeout', function(done) {
      this.timeout(3000);
      add(2500).then(result => {
        expect(result).to.equal(4, 'not 2 + 2 = 4');
        done();
      });
    });
  });

});