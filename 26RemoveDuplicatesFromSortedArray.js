/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 * @param {number[]} nums
 * @returns {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[index] !== nums[i]) {
            index++;
            nums[index] = nums[i];
        }
    }
    return index + 1;
}

console.log('Remove Duplicates from Sorted Array');
console.log(`[0,0,1,1,1,2,2,3,3,4]: ${removeDuplicates([0,0,1,1,1,2,2,3,3,4])}`);
console.log(`[1,1,2]: ${removeDuplicates([1,1,2])}`);
console.log(`[1,2,3,4]: ${removeDuplicates([1,2,3,4])}`);

/**
 * Output:
 * 
 * Remove Duplicates from Sorted Array
 * [0,0,1,1,1,2,2,3,3,4]: 5
 * [1,1,2]: 2
 * [1,2,3,4]: 4
 */