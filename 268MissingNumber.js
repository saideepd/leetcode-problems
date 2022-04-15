/**
 * 268. Missing Number
 * https://leetcode.com/problems/missing-number/
 * Category: Array, Bit Manipulation
 * 
 * @params {number[]} nums
 * @output number
 */
var missingNumber = function (nums) {
    // let n = nums.length;
    // nums.sort((a, b) => a - b);
    // for (let i = 0; i <= n; i++) {
    //     if (i !== nums[i])
    //         return i;
    // }

    // // Another Approach using sum of n numbers formula
    let n = nums.length;
    let sum1 = (n * (n + 1)) / 2;
    // let sum2 = nums.reduce((total, next) => total + next);
    let sum2 = 0;
    for (let num of nums)
        sum2 += num;
    return sum1 - sum2;
}

console.log('Missing Number');
console.log(`[3,0,1]: ${missingNumber([3,0,1])}`);
console.log(`[0,1]: ${missingNumber([0,1])}`);
console.log(`[9,6,4,2,3,5,7,0,1]: ${missingNumber([9,6,4,2,3,5,7,0,1])}`);
console.log(`[1]: ${missingNumber([1])}`);

/**
 * Output:
 * 
 * Missing Number
 * [3,0,1]: 2
 * [0,1]: 2
 * [9,6,4,2,3,5,7,0,1]: 8
 * [1]: 0
 */