/**
 * 1539. Kth Missing Positive Number
 * https://leetcode.com/problems/kth-missing-positive-number/
 * Category: Array, Binary Search
 * 
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2);

        if (arr[mid] - mid <= k)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return start + k;
};

console.log('Kth Missing Positive Number');
console.log(`[2,3,4,7,11], 5 = ${findKthPositive([2, 3, 4, 7, 11], 5)}`);
console.log(`[1,2,3,4], 2 = ${findKthPositive([1, 2, 3, 4], 2)}`);

/**
 * Output:
 * 
 * Kth Missing Positive Number
 * [2,3,4,7,11], 5 = 9
 * [1,2,3,4], 2 = 6
 */