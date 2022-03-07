/**
 * 28. Implement strStr()
 * https://leetcode.com/problems/implement-strstr/
 * Cateogry: Array, Two Pointer
 * 
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

var strStr = function (haystack, needle) {
    if (needle === '')
        return 0;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[j]) {
            let comparsion = haystack.substring(i, i + needle.length);
            if (comparsion === needle)
                return i;
        }
    }
    return -1;
}

console.log('Implement strStr()');
console.log(`hello, ll: ${strStr('hello', 'll')}`);
console.log(`aaaaaaa, bba: ${strStr('aaaaaaa', 'bba')}`);
console.log(`'', '': ${strStr('', '')}`);
console.log(`Saideep, de: ${strStr('Saideep', 'de')}`);

/**
 * Output:
 *
 * Implement strStr()
 * hello, ll: 2
 * aaaaaaa, bba: -1
 * '', '': 0
 * Saideep, de: 3
 */