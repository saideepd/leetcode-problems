/**
 * 1732. Find the Highest Altitude
 * https://leetcode.com/problems/find-the-highest-altitude/
 * Category: Array, Prefix Sum
 * 
 * @param {number[]} gain
 * @returns {number}
 */

var largestAltitude = function (gain) {
    let highest = 0, current = 0;
    gain.reduce((index, alt) => {
        current += alt;
        if (current > highest)
            highest = current;
    }, 0);
    return highest;
}

console.log('Find the Highest Altitude');
console.log(`[-5,1,5,0,-7] : ${largestAltitude([-5,1,5,0,-7])}`);
console.log(`[-4,-3,-2,-1,4,3,2] : ${largestAltitude([-4,-3,-2,-1,4,3,2])}`);

/**
 * Output:
 * 
 * Find the Highest Altitude
 * [-5,1,5,0,-7] : 1
 * [-4,-3,-2,-1,4,3,2] : 0
 */

/**
 * Stepwise process - 
 * 
 * Maintain 2 variables highest & current
 * Iterate through each item of gain[]
 * And keep on adding current & altitude (item of gain[])
 * In each iteration, set highest as current 
 * if the current value is greater than highest
 * 
 * Finally the resulting highest value is the altitude the biker gained
 */