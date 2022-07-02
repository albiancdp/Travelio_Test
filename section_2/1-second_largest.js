/*
Write an efficient function that will find the second largest number in an array of unsorted integers.
Example:
Input: 12 5 7 17 8 0 -1 16 7
Output: 16

*/

const arrayInput = [12, 5, 7, 17, 8, 0, -1, 16, 7];

function getSecondLargest(input) {
    let result = input.sort((a, b) => b - a)[1];
    return result;
};

const output = getSecondLargest(arrayInput);
console.log('Input :', arrayInput);
console.log('Output :', output);