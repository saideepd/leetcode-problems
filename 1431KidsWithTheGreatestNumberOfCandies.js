/**
 * 1431. Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * Category: Array
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
    let currentMax = Math.max(...candies);
    let boolArray = [];
    for (let i = 0; i < candies.length; i++) {
        boolArray.push((candies[i] + extraCandies) >= currentMax);
    }
    return boolArray;
}

console.log('Kids With the Greatest Number of Candies');
console.log(`[2,3,5,1,3], 3 : ${kidsWithCandies([2, 3, 5, 1, 3], 3)}`);
console.log(`[4,2,1,1,2], 1 : ${kidsWithCandies([4, 2, 1, 1, 2], 1)}`);
console.log(`[12,1,12], 10 : ${kidsWithCandies([12, 1, 12], 10)}`);

/**
 * Output:
 * 
 * Kids With the Greatest Number of Candies
 * [2,3,5,1,3], 3 : true,true,true,false,true
 * [4,2,1,1,2], 1 : true,false,false,false,false
 * [12,1,12], 10 : true,false,true
 */