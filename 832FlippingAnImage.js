/**
 * 832. Flipping An Image
 * https://leetcode.com/problems/flipping-an-image/
 * Category: Array, Two Pointers, Matrix, Simulation
 * 
 * @param {number[][]} Image
 * @returns {number[][]}
 */

var flipAndInvertImage = function (image) {
    // // Simple approach with reverse function
    // // and Bitwise operator
    // for (let row = 0; row < image.length; row++) {
    //     // reverse the row horizontally
    //     image[row].reverse();
    //     for (let col = 0; col < image[row].length; col++) {
    //         image[row][col] = 1 ^ image[row][col];
    //     }
    // }
    // return image;

    // Without built-in functions
    for (let i = 0; i < image.length; i++) {
        reverse(image[i]);
    }
    return image;
}

var reverse = function(rows) {
    let start = 0;
    while(start < rows.length / 2) {
        let end = rows.length - 1 - start;
        let temp = rows[start] === 0 ? 1 : 0;  // Bitwise operator can also work
        rows[start] = rows[end] === 0 ? 1 : 0; // Bitwise operator can also work
        rows[end] = temp;
        start++;
    }
}

console.log('Flipping An Image');
console.log(`[[1,1,0],[1,0,1],[0,0,0]] = ${flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])}`);
console.log(`[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] = ${flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])}`);

/**
 * Output:
 * 
 * Flipping An Image
 * [[1,1,0],[1,0,1],[0,0,0]] = 1,0,0,0,1,0,1,1,1
 * [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] = 1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0
 */