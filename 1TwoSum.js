/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Category: Array, Hash Table
 * 
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i];
        }
        hash[remainder] = i;
    }
}

console.log('Two Sum');
console.log(`[2,3,4], 6: [${twoSum([2,3,4], 6)}]`);
console.log(`[3,3], 6: [${twoSum([3,3], 6)}]`);
console.log(`[2,7,11,15], 9: [${twoSum([2,7,11,15], 9)}]`);

/**
 * Output:
 * 
 * Two Sum
 * [2,3,4], 6: [0,2]
 * [3,3], 6: [0,1]
 * [2,7,11,15], 9: [0,1]
 */