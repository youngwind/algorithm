/**
 * 给定一个数组，数组的每一项是一个字符串，返回所有字符串最长的共同前缀
 * @param {Array} arr
 * @returns {*}
 */
function findLongestCommonPrefix(arr) {
    let commonPrefix = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i].length < commonPrefix.length) {
            commonPrefix = commonPrefix.slice(0, arr[i].length);
        }
        let count = commonPrefix.length;
        while (count--) {
            if (commonPrefix[count] !== arr[i][count]) {
                commonPrefix = commonPrefix.slice(0, count);
            }
        }
        if (!commonPrefix.length) return ''
    }
    return commonPrefix;
}

module.exports = {
    findLongestCommonPrefix
};