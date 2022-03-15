/**
 * 1389. Create Target Array in the Give Order
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * Category: Array, Simulation
 * 
 * @param {number[]} nums
 * @param {number[]} index
 * @returns {number[]}
 */

var createTargetArray = function (nums, index) {
    let target = [];
    if (nums.length !== index.length)
        return -1;
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i])
    }
    return target;
}

console.log('Create Target Array in the Given Order');
console.log(`[0,1,2,3,4], [0,1,2,2,1] = ${createTargetArray([0,1,2,3,4], [0,1,2,2,1])}`);
console.log(`[1,2,3,4,0], [0,1,2,3,0] = ${createTargetArray([1,2,3,4,0], [0,1,2,3,0])}`);
console.log(`[1], [0] = ${createTargetArray([1], [0])}`);

/**
 * Output:
 * 
 * Create Target Array in the Given Order
 * [0,1,2,3,4], [0,1,2,2,1] = 0,4,1,3,2
 * [1,2,3,4,0], [0,1,2,3,0] = 0,1,2,3,4
 * [1], [0] = 1
 */