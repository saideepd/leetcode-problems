/**
 * 81. Search in Rotated Array 2
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @param {number} target
 * @returns {boolean}
 */

var search = function (nums, target) {
    // Return false for null or empty array
    if (nums === null || nums.length === 0)
        return false;

    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2);

        if (target === nums[mid])
            return true;

        // If start, mid & end elements are duplicates
        // Increment start pointer & decrement end pointer
        while (start < mid && nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
        }

        // Check whether target lies if left side or right side
        if (nums[start] <= nums[mid]) {
            // Left side is sorted, right side is unsorted
            if (target >= nums[start] && target < nums[mid])
                end = mid - 1;
            else
                start = mid + 1;
        }
        else {
            // Left side is unsorted, right side is sorted
            if (target > nums[mid] && target <= nums[end])
                start = mid + 1;
            else
                end = mid - 1;
        }
    }
    return false;
}

console.log('Search in Rotated Array 2');
console.log(`[2, 5, 6, 0, 0, 1, 2], 0 = ${search([2, 5, 6, 0, 0, 1, 2], 0)}`);
console.log(`[2, 5, 6, 0, 0, 1, 2], 3 = ${search([2, 5, 6, 0, 0, 1, 2], 3)}`);
console.log(`[1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13 = ${search([1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13)}`);
console.log(`[1], 0 = ${search([1], 0)}`);
console.log(`[1, 0, 1, 1, 1], 0 = ${search([1, 0, 1, 1, 1], 0)}`);

/**
 * Output:
 *
 * Search in Rotated Array 2
 * [2, 5, 6, 0, 0, 1, 2], 0 = true
 * [2, 5, 6, 0, 0, 1, 2], 3 = false
 * [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13 = true
 * [1], 0 = false
 * [1, 0, 1, 1, 1], 0 = true
 */