/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * Category: Array, Hash Table, Divide and Conquer, Sorting, Counting
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var majorityElement = function (nums) {
    // HashMap Approach
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

    // Bubble Sort Approach
    // sort(nums);
    // return nums[Math.trunc(nums.length / 2)];
};

const sort = (nums) => {
    let swapped;
    // Run the steps n - 1 times
    for (let i = 0; i < nums.length - 1; i++) {
        swapped = false;
        // For each step, max item will be placed at the last respective index
        for (let j = 1; j < nums.length - i; j++) {
            if (nums[j] > nums[j - 1]) {
                // Swap
                let temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
                swapped = true;
            }
        }

        // If any value swap is not swapped for a particular value of i
        // it means the array is sorted & hence stop the loop
        if (!swapped)
            break;
    }
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