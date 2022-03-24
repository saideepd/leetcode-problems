/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * Category: Array, Hash Table, Divide and Conquer, Sorting, Counting
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var majorityElement = function (nums) {
    let hashMap = new Map();
    for (let num of nums) {
        if (hashMap.has(num))
            hashMap.set(num, hashMap.get(num) + 1);
        else
            hashMap.set(num, 1);

        if (hashMap.get(num) > nums.length / 2)
            return num;
    }
    console.log('There is no majority element');
    return 0;
}

console.log('Majority Element');
console.log(`[3,2,3] = ${majorityElement([3, 2, 3])}`);
console.log(`[2,2,1,1,1,2,2] = ${majorityElement([2, 2, 1, 1, 1, 2, 2])}`);
console.log(`[2,2,1,1,1,2] = ${majorityElement([2, 2, 1, 1, 1, 2])}`);

/**
 * Output:
 *
 * Majority Element
 * [3,2,3] = 3
 * [2,2,1,1,1,2,2] = 2
 * There is no majority element
 * [2,2,1,1,1,2] = 0
 */