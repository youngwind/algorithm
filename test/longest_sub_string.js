let f = require('../src/longest_sub_string').theLengthOfLongestSubString;
let assert = require('assert');

describe('common', function () {
    it('should return the length of str when every char is unique.', function () {
        assert.equal(0, f(''));
        assert.equal(1, f('a'));
        assert.equal(2, f('ab'));
        assert.equal(3, f('abc'));
    });

    it('should return the correct length', function () {
        assert.equal(3, f('pwwkew'));
        assert.equal(1, f('bbbbb'));
        assert.equal(3, f('abcabcbb'));
        assert.equal(4, f('11234'));
        assert.equal(4, f('12344'));
        assert.equal(5, f('1234445678'));
        assert.equal(7, f('1234235678'));
    })
});