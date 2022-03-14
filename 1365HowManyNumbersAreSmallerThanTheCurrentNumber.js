/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * Category: Array, Hash Table, Sorting
 * 
 * @param {number[]} nums
 * @returns {number[]}
 */

var smallerNumbersThanCurrentNumber = function(nums) {
    // Iterative Approach
    // let result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let count = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i != j && nums[j] < nums[i])
    //             count++;
    //     }
    //     result.push(count);
    // }
    // return result;

    // Sorting and IndexOf Approach
    let sortedArray = [...nums].sort((a, b) => b - a);
    let numsLength = nums.length - 1;

    return nums.map((item) => numsLength - sortedArray.lastIndexOf(item));
}

console.log('How Many Numbers are Smaller than the Current Number');
console.log(`[8,1,2,2,3]: ${smallerNumbersThanCurrentNumber([8,1,2,2,3])}`);
console.log(`[6,5,4,8]: ${smallerNumbersThanCurrentNumber([6,5,4,8])}`);
console.log(`[7,7,7,7]: ${smallerNumbersThanCurrentNumber([7,7,7,7])}`);

/**
 * Output:
 * 
 * How Many Numbers are Smaller than the Current Number
 * [8,1,2,2,3]: 4,0,1,1,3
 * [6,5,4,8]: 2,1,0,3
 * [7,7,7,7]: 0,0,0,0
 */