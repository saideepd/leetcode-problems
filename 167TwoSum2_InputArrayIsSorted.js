/**
 * 167. Two Sum 2 - Input Array is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Category: Array, Two Pointers, Binary Search
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number}
 */

var twoSum = function (numbers, target) {
    let indices = [];
    let start = 0, end = numbers.length - 1;
    while (start < end) {
        // Calculate sum by summing start & end pointers
        let sum = numbers[start] + numbers[end];

        // If sum matches target, set the index values & break the loop
        if (sum == target) {
            indices[0] = start + 1;
            indices[1] = end + 1;
            break;
        }
        // If sum is greater than target, decrement end pointer
        else if (sum > target)
            end--;
        // If sum is less than target, increment start pointer
        else
            start++;
    }
    return indices;
}

console.log('Two Sum 2 - Input is Sorted Array');
console.log(`[2,7,11,15], 9 = [${twoSum([2,7,11,15], 9)}]`);
console.log(`[2,3,4], 6 = [${twoSum([2,3,4], 6)}]`);
console.log(`[-1,0], -1 = [${twoSum([-1,0], -1)}]`);

/**
 * Output:
 * 
 * Two Sum 2 - Input is Sorted Array
 * [2,7,11,15], 9 = [1,2]
 * [2,3,4], 6 = [1,3]
 * [-1,0], -1 = [1,2]
 */