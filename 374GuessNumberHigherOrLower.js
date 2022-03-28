/**
 * 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * Category: Binary Search, Interactive
 * 
 * @param {number[]} n
 * @returns {number}
 */

var guessNumber = function (n) {
    let start = 1, end = n;
    while (start <= end) {
        // Calculate mid value
        let pick = Math.trunc(start + (end - start) / 2);
        // If API returns 0, match found, return pick
        if (guess(pick) === 0)
            return pick;
        // If API returns -1, guess is higher than pick
        // Update end
        else if (guess(pick) === -1)
            end = pick - 1;
        // Guess is lower than pick
        // Update start
        else
            start = pick + 1;
    }
    return -1;
}

console.log('Guess Number Higher or Lower');
console.log('n, pick')
console.log(`10, 6 = ${guessNumber(10)}`);
console.log(`1, 1 = ${guessNumber(1)}`);
console.log(`2, 1 = ${guessNumber(2)}`);

/**
 * Output:
 * 
 * Guess Number Higher or Lower
 * n, pick
 * 10, 6 = 6
 * 1, 1 = 1
 * 2, 1 = 1
 */