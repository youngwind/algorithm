/**
 * 快速排序
 * @param {Array} array 待排序数组
 * @returns {Array} 已排序数组
 * 时间复杂度一般为 O(nlogN)，极端情况下为 O(n的平方)
 */
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));

}

module.exports = quickSort;