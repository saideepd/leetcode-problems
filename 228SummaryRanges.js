/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 * Category: Array
 * 
 * @param {number[]} nums
 * @returns {number[]}
 */

var summaryRanges = function(nums) {
    let n = nums.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let start = nums[i];
        while (i+1 < n && nums[i]+1 === nums[i+1])
            i++;
        let end = nums[i];

        if (start === end)
            res.push(start + "");
        else
            res.push(start + "->" + end);
    }
    return res;
}

console.log('Summary Ranges');
console.log(`[0,1,2,4,5,7]: ${summaryRanges([0,1,2,4,5,7])}`);
console.log(`[0,2,3,4,6,8,9]: ${summaryRanges([0,2,3,4,6,8,9])}`);
console.log(`[]: ${summaryRanges([])}`);
console.log(`[1]: ${summaryRanges([1])}`);
console.log(`[-1]: ${summaryRanges([-1])}`);

/** 
 * Output:
 * 
 * Summary Ranges
 * [0,1,2,4,5,7]: 0->2,4->5,7
 * [0,2,3,4,6,8,9]: 0,2->4,6,8->9
 * []: 
 * [1]: 1
 * [-1]: -1
 */