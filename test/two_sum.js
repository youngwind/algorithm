let twoSum = require('../src/two_sum');
let assert = require('assert');


describe('common', function () {
    it('normal case', function () {
        assert.deepEqual([0, 1], twoSum([2, 7, 11, 15], 9));
        assert.deepEqual([1, 2], twoSum([11, 2, 7, 15], 9));
        assert.deepEqual(-1, twoSum([2, 7, 11, 15], 20));
    });
});

