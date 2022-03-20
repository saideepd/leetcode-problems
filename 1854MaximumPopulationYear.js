/**
 * 1854. Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year/
 * Category: Array, Counting
 * 
 * @param {number[]} logs
 */

var maximumPopulation = function (logs) {
    // Declare & initialize an array of size 2051 as its the max upper limit
    let year = new Array(2051).fill(0);

    // Increment Birth Year & Decrement Death Year of each pair
    for (let log of logs) {
        year[log[0]] += 1;
        year[log[1]] -= 1;
    }

    // Set some default values for Maximum Number at starting Year
    // And Maximum Year as the starting year
    let maxNum = year[1950], maxYear = 1950;

    for (let i = 1951; i < year.length; i++) {
        // Generate Prefix Sum
        // Sum of Current & Previous year
        year[i] += year[i - 1];

        // If the Current year has a value
        // that is higher than previous Max Value, update the max values
        if (year[i] > maxNum) {
            maxNum = year[i];
            maxYear = i;
        }
    }

    return maxYear;
}

console.log('Maximum Population Year');
console.log(`[[1993,1999],[2000,2010]] = ${maximumPopulation([[1993, 1999], [2000, 2010]])}`);
console.log(`[[1950,1961],[1960,1971],[1970,1981]] = ${maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]])}`);

/**
 * Output:
 * 
 * Maximum Population Year
 * [[1993,1999],[2000,2010]] = 1993
 * [[1950,1961],[1960,1971],[1970,1981]] = 1960
 */