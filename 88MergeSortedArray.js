/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * Category: Array, Two Pointers, Sorting
 */

var merge = function (nums1, m, nums2, n) {
    // Two Pointers Appraoch

    let i = m-1, j = n-1, k = m+n-1;
    // Loop till nums1 (i) is iterable
    while (i >=0 && j >= 0) {
        if (nums1[i] < nums2[j])
            nums1[k--] = nums2[j--];
        else
            nums1[k--] = nums1[i--];
    }
    // Loop for rest of the items from nums2 (j)
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
    return nums1;

    // // Sorting Approach
    // for(let i = m, j = 0; i < m+n; i++, j++) {
    //     nums1[i] = nums2[j];
    // }
    // nums1.sort((a, b) => a - b);
    // return nums1;
}

console.log('Merge Sorted Array');
console.log(`[1,2,3,0,0,0],3,[2,5,6],3: ${merge([1,2,3,0,0,0],3,[2,5,6],3)}`);
console.log(`[1],1,[],0: ${merge([1],1,[],0)}`);
console.log(`[0],0,[1],1: ${merge([0],0,[1],1)}`);

/**
 * Output:
 * 
 * Merge Sorted Array
 * [1,2,3,0,0,0],3,[2,5,6],3: 1,2,2,3,5,6
 * [1],1,[],0: 1
 * [0],0,[1],1: 1
 */