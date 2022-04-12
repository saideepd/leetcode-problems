/**
 * Bubble Sort
 * https://www.youtube.com/watch?v=F5MZyqRp_IM&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=18
 * Catergory: Array, Sorting
 */

const bubble = (arr) => {
    let swapped;

    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }

    return arr;
};

console.log('Bubble Sort');
console.log(`Before Sorting = [3, 1, 5, 4, 2]; After Sorting = [${bubble([3, 1, 5, 4, 2])}]`);
console.log(`Before Sorting = [1, 2, 3, 4, 5]; After Sorting = [${bubble([1, 2, 3, 4, 5])}]`);
console.log(`Before Sorting = [-3, 3, -16, 0, 1, 10, -44]; After Sorting = [${bubble([-3, 3, -16, 0, 1, 10, -44])}]`);

/**
 * Output:
 * 
 * Bubble Sort
 * Before Sorting = [3, 1, 5, 4, 2]; After Sorting = [1,2,3,4,5]
 * Before Sorting = [1, 2, 3, 4, 5]; After Sorting = [1,2,3,4,5]
 * Before Sorting = [-3, 3, -16, 0, 1, 10, -44]; After Sorting = [-44,-16,-3,0,1,3,10]
 */