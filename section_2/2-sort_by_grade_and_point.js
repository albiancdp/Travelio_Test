/*
Please create a function which can get the name in case of sort the people in grade order asc then point order desc


Output = [ 'candra','surya','goklas','hendra','hanson','jefry','evan','rizky' ]

Note :
Grade = A, B ,C …
Point = 50000, 70000 …
*/
const arrayInput = [
    'evan|50000|D',
    'jefry|70000|C',
    'rizky|30000|D',
    'hanson|10000|B',
    'candra|30000|A',
    'goklas|20000|A',
    'hendra|20000|B',
    'surya|30000|A',
];

function sortInput(input) {
    // your code here
    let result = [];
    let arrayInnerTemporary = [];
    let arrayTemporary = [];
    let lastGrade = '';
    // sort by grade ASC
    const sortGrade = input.sort((a, b) => {
        const aSplit = a.split('|');
        const bSplit = b.split('|');
        const aGrade = aSplit[2];
        const bGrade = bSplit[2];

        if (aGrade < bGrade) {
            return -1;
        }
        if (aGrade > bGrade) {
            return 1;
        }
        return 0;
    });
    // create array temporary per group grade
    for (let i = 0; i < sortGrade.length; i++) {
        const element = sortGrade[i];
        const grade = element.split('|')[2];
        if (grade === lastGrade) {
            arrayInnerTemporary.push(element);
        } else {
            if (arrayInnerTemporary.length > 0) {
                arrayTemporary.push(arrayInnerTemporary);
                arrayInnerTemporary = [];
            }
            arrayInnerTemporary.push(element);
            lastGrade = grade;
        }
    }
    // if array inner not empty, push to array temporary
    if (arrayInnerTemporary.length > 0) {
        arrayTemporary.push(arrayInnerTemporary);
    }
    // sort by point DESC
    for (let i = 0; i < arrayTemporary.length; i++) {
        const element = arrayTemporary[i];
        const sortPoint = element.sort((a, b) => {
            const aSplit = a.split('|');
            const bSplit = b.split('|');
            const aPoint = aSplit[1];
            const bPoint = bSplit[1];

            if (aPoint > bPoint) {
                return -1;
            }
            if (aPoint < bPoint) {
                return 1;
            }
            return 0;
        });
        result.push(...sortPoint);
    }
    // maping get name in string
    result = result.map(item => {
        const itemSplit = item.split('|');
        return itemSplit[0];
    });

    return result;
};

const output = sortInput(arrayInput);
console.log('Input :', arrayInput);
console.log('Output :', output);