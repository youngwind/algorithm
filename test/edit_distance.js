let f = require('../src/edit_distance');
let editDistance = f.dynamicPlanning;
let assert = require('assert');
describe('critical', function () {
    it('should return the length of longer string when the other is empty. For example, "abc" => ""', function () {
        assert.equal(1, editDistance('', 'a', 0, 1));
        assert.equal(1, editDistance('a', '', 1, 0));
        assert.equal(3, editDistance('abc', '', 3, 0));
        assert.equal(4, editDistance('', 'abcd', 0, 4));
    });
    it('should return 0 when two strings ara equal, for example, "ab" => "ab"', function () {
        assert.equal(0, editDistance('', '', 0, 0));
        assert.equal(0, editDistance('a', 'a', 1, 1));
        assert.equal(0, editDistance('ab', 'ab', 2, 2));
    });
});

describe('common', function () {
    it('should return 1 when only need to replace one character. For example, "ac" => "ac"', function () {
        assert.equal(1, editDistance('a', 'b', 1, 1));
        assert.equal(1, editDistance('ab', 'ac', 2, 2));
        assert.equal(1, editDistance('ab', 'cb', 2, 2));
    });
    it('should return 1 when only need to delete on character. For example, "abc" => "ac"', function () {
        assert.equal(1, editDistance('ab', 'a', 2, 1));
        assert.equal(1, editDistance('ab', 'b', 2, 1));
        assert.equal(1, editDistance('abc', 'ab', 3, 2));
        assert.equal(1, editDistance('abc', 'ac', 3, 2));
        assert.equal(1, editDistance('abc', 'bc', 3, 2));
    });
    it('should return 1 when only need to insert one character. For example, "ab" => "acb"', function () {
        assert.equal(1, editDistance('a', 'ab', 1, 2));
        assert.equal(1, editDistance('a', 'ba', 1, 2));
        assert.equal(1, editDistance('ab', 'acb', 2, 3));
    });
    it('should return the correct result when in other cases', function () {
        assert.equal(2, editDistance('a', 'abc', 1, 3));
        assert.equal(2, editDistance('ab', 'acbd', 2, 4));
        assert.equal(3, editDistance('abc', 'bbacd', 3, 5));
    })
});