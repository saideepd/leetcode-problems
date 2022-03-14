/**
 * 71. Simplify Path
 * https://leetcode.com/problems/simplify-path/
 * Category: String, Stack
 * 
 * @param {string} path
 * @returns {string}
 */

var simplifyPath = function (path) {
    let stack = [];
    // Split the path string into array items with / as separator
    path = path.split('/');
    
    for (let i = 0; i < path.length; i++) {
        // If the current item is . or blank or space skip them from stack
        if (path[i] === '.' || path[i] === '')
            continue
        if (path[i] === '..')
            stack.pop();
        else
            stack.push(path[i]);
    }

    return '/' + stack.join('/');
}

console.log('Simplify Path');
console.log(`"/home/" = ${simplifyPath("/home/")}`);
console.log(`"/../" = ${simplifyPath("/../")}`);
console.log(`"/home//foo/" = ${simplifyPath("/home//foo/")}`);
console.log(`"/home//foo/../bar/" = ${simplifyPath("/home//foo/../bar/")}`);

/**
 * Output:
 * 
 * Simplify Path
 * "/home/" = /home
 * "/../" = /
 * "/home//foo/" = /home/foo
 * "/home//foo/../bar/" = /home/bar
 */