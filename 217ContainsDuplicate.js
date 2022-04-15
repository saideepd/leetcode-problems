/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Category: Array, Hash Table, Sorting
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (input) => {
    // Binary Search approach
    // let isDuplicate = false, n = input.length;
    // if (n <= 1)
    //     return isDuplicate;

    // input.sort((a, b) => {return a - b});

    // for(let i = 0; i < n; i++) {
    //     if(i+1 < n && input[i] === input[i+1])
    //         isDuplicate = true;
    // }
    // return isDuplicate;

    // Set approach
    let uniques = new Set();
    for(let i = 0; i < input.length; i++) {
        if (uniques.has(input[i]))
            return true;
        uniques.add(input[i]);
    }
    return false;

    // Bubble Sort Approach
    // sort(input);
    // for (let i = 1; i < input.length; i++) {
    //     if(input[i] === input[i - 1])
    //         return true;
    // }
    // return false;
};

const sort = (input) => {
    let swapped;
    for (let i = 0; i < input.length - 1; i++) {
        swapped = false;
        for (let j = 1; j < input.length - i; j++) {
            if (input[j] > input[j - 1]) {
                let temp = input[j];
                input[j] = input[j - 1];
                input[j - 1] = temp;
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
};

console.log(`[1,2,3,5,7,2]: ${containsDuplicate([1,2,3,5,7,2])}`);
console.log(`[1,2,3,3,1,2]: ${containsDuplicate([1,2,3,3,1,2])}`);
console.log(`[1,4,3,5,2]: ${containsDuplicate([1,4,3,5,2])}`);
console.log(`[3,3]: ${containsDuplicate([3,3])}`);
console.log(`[1]: ${containsDuplicate([1])}`);

/**
 * Output:
 * 
 * [1,2,3,5,7,2]: true
 * [1,2,3,3,1,2]: true
 * [1,4,3,5,2]: false
 * [3,3]: true
 * [1]: false
 */