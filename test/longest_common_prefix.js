let f = require('../src/longest_common_prefix').findLongestCommonPrefix;
let assert = require('assert');

describe('寻找最长共同前缀', function () {
    it('通过', function () {
        assert.equal('hi, ', f(['hi, barret', 'hi, skylar', 'hi, john']));
        assert.equal('', f(['a', 'b', 'c']));
        assert.equal('a', f(['a', 'ab', 'ac', 'aaa']));
        assert.equal('ab', f(['ab', 'abc', 'abc', 'abcd']));
    });
});