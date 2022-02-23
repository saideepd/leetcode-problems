/**
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element/
 * 
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */

var removeElement = function (nums, val) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

console.log('Remove Element');
console.log(`[3,2,2,3],3: ${removeElement([3,2,2,3],3)}`);
console.log(`[3,2,2,3],2: ${removeElement([3,2,2,3],2)}`);
console.log(`[0,1,2,2,3,0,4,2],2: ${removeElement([0,1,2,2,3,0,4,2],2)}`);

/**
 * Output:
 * 
 * Remove Element
 * [3,2,2,3],3: 2
 * [3,2,2,3],2: 2
 * [0,1,2,2,3,0,4,2],2: 5
 */