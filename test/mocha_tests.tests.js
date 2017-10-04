import { randomIntFromInterval } from '../imports/ui/helper_funcs.js';

// const assert = require('assert');
const assert = require('chai').assert;

/**
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
*/
describe('Testing helper_funcs.jsx', function() {
  describe('randomIntFromInterval', function() {
    it('should return a number between -50 and -10', function() {
      const receivedNumber = randomIntFromInterval(-50, -10);
      assert.isAtLeast(receivedNumber, -50);
      assert.isAtMost(receivedNumber, -10);
      /**
        for (var index = 0; index < actualArray.length; ++index) {
            assert.isAtLeast(actualArray[index], start);
            assert.isAtMost(actualArray[index], end);
          }
          */
    });
    it('should return a number between -50 and 10', function() {
      const receivedNumber = randomIntFromInterval(-50, 10);
      assert.isAtLeast(receivedNumber, -50);
      assert.isAtMost(receivedNumber, 10);
      /**
        for (var index = 0; index < actualArray.length; ++index) {
            assert.isAtLeast(actualArray[index], start);
            assert.isAtMost(actualArray[index], end);
          }
          */
    });
    it('should return a number between 10 and 42', function() {
      const receivedNumber = randomIntFromInterval(10, 42);
      assert.isAtLeast(receivedNumber, 10);
      assert.isAtMost(receivedNumber, 42);
      /**
        for (var index = 0; index < actualArray.length; ++index) {
            assert.isAtLeast(actualArray[index], start);
            assert.isAtMost(actualArray[index], end);
          }
          */
    });
  });
  /**
  it('should not return 14', function() {
    assert.notEqual(14, sumtwonumbers(4, 4));
  });
  */
});
