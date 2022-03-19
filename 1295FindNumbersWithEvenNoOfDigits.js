/**
 * 1295. Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * Category: Array
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var findNumbers = function (nums) {
    let count = 0;
    for (let num of nums) {
        if (isEvenDigits(num))
            count++;
    }

    return count;
}

const isEvenDigits = (num) => {
    let numLength = 1;

    while (Math.floor(num / 10) > 0) {
        num /= 10;
        numLength++;
    }

    return numLength % 2 === 0;
}

console.log('Find Numbers with Even Number of Digits');
console.log(`[12,345,2,6,7896] = ${findNumbers([12, 345, 2, 6, 7896])}`);
console.log(`[555,901,482,1771] = ${findNumbers([555, 901, 482, 1771])}`);
console.log(`[55,4901,4482] = ${findNumbers([55,4901,4482])}`);

/**
 * Output:
 * 
 * Find Numbers with Even Number of Digits
 * [12,345,2,6,7896] = 2
 * [555,901,482,1771] = 1
 * [55,4901,4482] = 3
 */