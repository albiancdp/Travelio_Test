/*

*/

const arrayInput = [
    'racecar',
    'bringback',
    'neveroddoreven',
    'carisonrace'
];

function checkPalindrome(dataString) {
    const lengthString = dataString.length;
    let result = 'not palindrom';

    for (let i = 0; i < lengthString; i++) {
        const element = dataString[i];
        if (element === dataString[lengthString - 1 - i]) {
            result = 'palindrom';
        } else {
            result = 'not palindrom';
            break;
        }
    }

    return result;
};

function start(input) {
    for (let i = 0; i < input.length; i++) {
        const stringInput = input[i];
        const resultPalindrom = checkPalindrome(stringInput);
        console.log('Input :', stringInput);
        console.log('Output :', resultPalindrom);
        console.log();
    }
};

start(arrayInput);