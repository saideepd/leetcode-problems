/**
 * 35. Search Insert position
 * https://leetcode.com/problems/search-insert-position/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @param {number} target
 * @returns number
 */

var searchInsert = function(nums, target) {
    let n = nums.length;
    let result = binarySearch(nums, 0, n - 1, target);
    return result;
}

var binarySearch = function(arr, left, right, target) {
    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] == target)
            return mid;
        if (arr[mid] > target)
            return binarySearch(arr, left, mid - 1, target);
        if (arr[mid] < target)
            return binarySearch(arr, mid + 1, right, target);
    }
    return left;
}

console.log('Search Insert Position');
console.log(`[1,3,5,6], 2: ${searchInsert([1,3,5,6], 2)}`);
console.log(`[1,3,5,6], 7: ${searchInsert([1,3,5,6], 7)}`);
console.log(`[1,3,5,6], 5: ${searchInsert([1,3,5,6], 5)}`);
console.log(`[1,5], 7: ${searchInsert([1,5], 7)}`);

/** Output:
 * 
 * Search Insert Position
 * [1,3,5,6], 2: 1
 * [1,3,5,6], 7: 4
 * [1,3,5,6], 5: 2
 * [1,5], 7: 2
 */