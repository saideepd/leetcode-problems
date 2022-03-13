/**
 * 1470. Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array/
 * Category: 
 * 
 * @param {number[]} nums
 * @param {number} n
 * @returns {number[]}
 */

var shuffle = function (nums, n) {
    let shuffledArray = [];
    for (let i = 0; i < n; i++) {
        shuffledArray.push(nums[i], nums[i + n]);
    }
    return shuffledArray;
}

console.log('Shuffle the Array');
console.log(`[2,5,1,3,4,7], 3 : ${shuffle([2, 5, 1, 3, 4, 7], 3)}`);
console.log(`[1,2,3,4,4,3,2,1], 4 : ${shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)}`);
console.log(`[1,1,2,2], 2 : ${shuffle([1, 1, 2, 2], 2)}`);

/**
 * Output:
 * 
 * Shuffle the Array
 * [2,5,1,3,4,7], 3 : 2,3,5,4,1,7
 * [1,2,3,4,4,3,2,1], 4 : 1,4,2,3,3,2,4,1
 * [1,1,2,2], 2 : 1,2,1,2
 */