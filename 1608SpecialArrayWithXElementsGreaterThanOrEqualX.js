/**
 * 1608. Special Array with X Elements Greater than or Equal X
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 * Category: Array, Binary Search, Sorting
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var specialArray = function (nums) {
    // Return if array length is 0
    if (nums.length === 0)
        return 0;

    // Sort the array to find the x value
    nums.sort((a, b) => a - b);

    for (let x = 1; x <= nums.length; x++) {
        // Define a target position in the array
        let target = nums.length - x;

        // If value at target is >= x
        // and target's previous value is less than x
        // the we've found x
        if (nums[target] >= x && (target === 0 || nums[target - 1] < x))
            return x;
    }

    return -1;
}

console.log('Special Array with X Elements Greater than or Equal X');
console.log(`[3, 5] = ${specialArray([3, 5])}`);
console.log(`[0, 0] = ${specialArray([0, 0])}`);
console.log(`[0, 4, 3, 0, 4] = ${specialArray([0, 4, 3, 0, 4])}`);