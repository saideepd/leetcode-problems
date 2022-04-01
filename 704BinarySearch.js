/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

var search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        // Calculate mid value
        let mid = Math.trunc(start + (end - start) / 2);

        // If mid element matches target, return mid index
        if (target == nums[mid])
            return mid;
        // If target is less than mid element, update end pointer
        else if (target < nums[mid])
            end = mid - 1;
        // If target is greater than mid element, update start pointer
        else
            start = mid + 1;
    }

    // Return -1 if target does not exists in array
    return -1;
}

console.log('Binary Search');
console.log(`[-1, 0, 3, 5, 9, 12], 9 = ${search([-1, 0, 3, 5, 9, 12], 9)}`);
console.log(`[-1, 0, 3, 5, 9, 12], 2 = ${search([-1, 0, 3, 5, 9, 12], 2)}`);

/**
 * Output:
 * 
 * Binary Search
 * [-1, 0, 3, 5, 9, 12], 9 = 4
 * [-1, 0, 3, 5, 9, 12], 2 = -1
 */