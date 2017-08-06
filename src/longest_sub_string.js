/**
 * 寻找最长不重复的子串
 * @param str
 * @returns {number}
 */
function theLengthOfLongestSubString(str) {
    let index = {}; // keys: char of a tentative substr, values: index
    let tenLen = 0; // len of the tentative substr

    let resLen = 0; // result len

    for (let i = 0; i < str.length; i += 1) {
        let ic = index[str[i]];
        if (typeof ic !== 'undefined') {
            if (tenLen > resLen) {
                resLen = tenLen
            }
            tenLen = i - ic;
            index[str[i]] = i;
        } else {
            tenLen += 1;
        }
        index[str[i]] = i
    }
    return Math.max(tenLen, resLen)
}

module.exports = {
    theLengthOfLongestSubString
};