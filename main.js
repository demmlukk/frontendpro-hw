// 1.
function calculateAverageOfNumbers(array) {
    const numElements = array.filter (element => typeof element === 'number' && !isNaN(element));
    if (numElements.length === 0) {
        return null;
    }
    const average = numElements.reduce((sum, element) => sum + element, 0) / numElements.length;
    return average;
}



// 2.
 function doMath (x, znak, y) {
    x = +x;
    y = +y;
    if (isNaN(x) || isNaN(y)) {
        return "Будь ласка, введіть коректні числа."
    }

    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return "Ділення на нуль неможливе.";
            }
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return "Невірний знак операції. Введіть один із: +, -, *, /, %, ^";

    }
 }

const x = prompt("Введіть перше число:");
const znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
const y = prompt("Введіть друге число:");

const result = doMath(x, znak, y);
console.log(result);


 // 3.
function fillTwoDimensionalArray() {
    const rows = +(prompt("Enter the number of rows:"));
    const columns = +(prompt("Enter the number of columns:"));

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        return "Please enter valid values for the array dimensions.";
    }

    const twoDimensionalArray = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const value = prompt(`Enter the value for element [${i}][${j}]:`);
            row.push(value);
        }
        twoDimensionalArray.push(row);
    }

    return twoDimensionalArray;
}

const result = fillTwoDimensionalArray();
console.log(result);




//4.
function removeCharacters(inputString, charactersToRemove) {
    const charsSet = new Set(charactersToRemove);

    const resultString = inputString.split('').filter(char => !charsSet.has(char)).join('');

    return resultString;
}

const userInputString = prompt("Enter a string:");
const charactersToRemoveInput = prompt("Enter characters to remove (comma-separated):");

const charactersToRemove = charactersToRemoveInput.split(',');

const result = removeCharacters(userInputString, charactersToRemove);
console.log(result);
