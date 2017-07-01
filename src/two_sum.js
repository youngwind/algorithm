/**
 * 从数组中找出满足两数之和等于 target 的数字，找不到返回 -1
 * @origin https://github.com/barretlee/daily-algorithms/issues/1
 * @param {Array} nums
 * @param {Number} target
 * @returns {-1|Array}
 */
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let matching = target - num;
        if (map[num] === undefined) {
            map[matching] = i;
        } else {
            return [map[num], i];
        }
    }
    return -1;
}

module.exports = twoSum;

