/**
 * 1512. Number of Good Pairs
 * https://leetcode.com/problems/number-of-good-pairs/
 * Category: Array, Hash Table, Map, Two Pointer
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var numIdenticalPairs = function (nums) {
    // Iterative Approach
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j])
    //             count++;
    //     }
    // }
    // return count;

    // Two Pointer Approach
    let left = 0, right = nums.length - 1, count = 0;
    while (left < right) {
        // If left & right value match, increment count & 
        // shift right pointer towards left
        if (nums[left] === nums[right])
            count++;
        right--;

        // if left & right pointers are on the same position
        // increment left to go to next element
        // and reset right to right most index
        if (left === right) {
            left++;
            right = nums.length - 1;
        }
    }

    return count;
}

console.log('Number of Good Pairs');
console.log(`[1,2,3,1,1,3]: ${numIdenticalPairs([1, 2, 3, 1, 1, 3])}`);
console.log(`[1,1,1,1]: ${numIdenticalPairs([1, 1, 1, 1])}`);
console.log(`[1,2,3]: ${numIdenticalPairs([1, 2, 3])}`);

/**
 * Output:
 *
 * Number of Good Pairs
 * [1,2,3,1,1,3]: 4
 * [1,1,1,1]: 6
 * [1,2,3]: 0
 */