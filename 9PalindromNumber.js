/**
 * 9. Palindrom Number
 * https://leetcode.com/problems/palindrome-number/
 * 
 * @param {number} x
 * @returns {boolean}
 */
const isPalindrome = (x) => {
    // Alternate solution
    // return x.toString() === x.toString().split('').reverse().join('');
    
    let input = x, temp = 0, y = 0;
    while (x > 0) {
        y = x % 10;
        x = parseInt(x / 10);
        temp = temp * 10 + y;
    }
    return input === temp;
};

console.log(`121: ${isPalindrome(121)}`);
console.log(`22022022: ${isPalindrome(22022022)}`);
console.log(`1421: ${isPalindrome(1421)}`);

/**
 * Output:
 * 
 * 121: true
 * 22022022: true
 * 1421: false
 */