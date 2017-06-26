let sort = require('../src/quick_sort');
let assert = require('assert');

describe('critical', function () {
    it('should return array itself when the length of array is 0 or 1', function () {
        assert.deepEqual([], sort([]));
        assert.deepEqual([1], sort([1]));
        assert.deepEqual([2], sort([2]));
    });
});

describe('common', function () {
    it('normal case', function () {
        assert.deepEqual([1, 2, 3, 4], sort([4, 3, 2, 1]));
        assert.deepEqual([1, 2, 3, 4], sort([3, 2, 4, 1]));
        assert.deepEqual([1, 2, 3, 4], sort([1, 3, 2, 4]));
        assert.deepEqual([-1, 0, 1, 2], sort([2, -1, 1, 0]));
        assert.deepEqual([1, 2, 2, 3, 3], sort([3, 1, 2, 2, 3]));
    });
});

