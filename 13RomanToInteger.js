/**
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * Cateogry:
 */

var romanToInt = function(s) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let stringArr = s.split('');
    let num = 0;

    for (let i = 0; i < stringArr.length; i++) {
        let current = romanNumerals[stringArr[i]];
        let next = romanNumerals[stringArr[i+1]];
        if (next > current)
            num -= current;
        else
            num += current;
    }

    return num;
}

console.log('Roman to Integer');
console.log(`IV: ${romanToInt('IV')}`);
console.log(`XXI: ${romanToInt('XXI')}`);
console.log(`MCMXCIV: ${romanToInt('MCMXCIV')}`);

/**
 * Output:
 * 
 * Roman to Integer
 * IV: 4
 * XXI: 21
 * MCMXCIV: 1994
 */