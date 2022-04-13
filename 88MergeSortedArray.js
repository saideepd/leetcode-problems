/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * Category: Array, Two Pointers, Sorting
 */

var merge = function (nums1, m, nums2, n) {
    // Two Pointers Appraoch

    // let i = m-1, j = n-1, k = m+n-1;
    // // Loop till nums1 (i) is iterable
    // while (i >=0 && j >= 0) {
    //     if (nums1[i] < nums2[j])
    //         nums1[k--] = nums2[j--];
    //     else
    //         nums1[k--] = nums1[i--];
    // }
    // // Loop for rest of the items from nums2 (j)
    // while (j >= 0) {
    //     nums1[k--] = nums2[j--]
    // }
    // return nums1;

    // // Sorting Approach
    // for(let i = m, j = 0; i < m+n; i++, j++) {
    //     nums1[i] = nums2[j];
    // }
    // nums1.sort((a, b) => a - b);
    // return nums1;

    // Alternative Two Pointer Approach
    
    // Pointers p1 & p2 point to end of nums1 & nums
    let p1 = m - 1, p2 = n - 1, i = m + n - 1;

    // Iterate only till length of nums2
    while (p2 >= 0) {
        // While the length of nums1 is greater than 0
        // And the element at p1 in nums is greater then element at p2 in nums2
        // set the element in nums1 at ith position (from back) whichever is larger
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i--] = nums1[p1--];
        }
        // Else set the element in nums1 at ith position (from back) whichever is smaller
        else {
            nums1[i--] = nums2[p2--];
        }
    }
    return nums1;
}

console.log('Merge Sorted Array');
console.log(`[1,2,3,0,0,0],3,[2,5,6],3: [${merge([1,2,3,0,0,0],3,[2,5,6],3)}]`);
console.log(`[1],1,[],0: [${merge([1],1,[],0)}]`);
console.log(`[0],0,[1],1: [${merge([0],0,[1],1)}]`);

/**
 * Output:
 * 
 * Merge Sorted Array
 * [1,2,3,0,0,0],3,[2,5,6],3: [1,2,2,3,5,6]
 * [1],1,[],0: [1]
 * [0],0,[1],1: [1]
 */