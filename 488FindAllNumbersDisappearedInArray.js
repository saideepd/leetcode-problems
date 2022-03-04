/**
 * 488. Find All Numbers Disappeared in Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * Category: Array, Bit Manipulation
 * 
 * @param {number[]} nums
 * @returns {number[]}
 */

var findDisappearedNumbers = function(nums) {
    let missingNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        let check = Math.abs(nums[i]) - 1;
        if ((nums[check]) > 0) {
            nums[check] = -nums[check];
            console.log(nums);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0)
            missingNumbers.push(i+1);
    }
    return missingNumbers;

    // // Hash Set Approach
    // let missing = [];
    // let set = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     if (!set.has(nums[i]))
    //         set.add(nums[i]);
    // }
    // let index = 1;
    // for (let i = 0; i < nums.length; i++) {
    //     if (!set.has(index))
    //         missing.push(index);
    //     index++;
    // }
    // return missing;
}

console.log('Find All Numbers Disappeared in Array');
console.log(`[4,3,2,7,8,2,3,1]: ${findDisappearedNumbers([4,3,2,7,8,2,3,1])}`);
console.log(`[1,1]: ${findDisappearedNumbers([1,1])}`);

/**
 * Output:
 * 
 * Find All Numbers Disappeared in Array
 * [4,3,2,7,8,2,3,1]: 5,6
 * [1,1]: 2
 */