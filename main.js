// // 1.
// function averageOfNumbers(arr) {
//     let sum = 0;
//     let count = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//             count++;
//         }
//     }
//
//     if (count === 0) {
//         return "Немає чисел для обчислення середнього арифметичного.";
//     }
//
//     return sum / count;
// }
//
// // Приклад використання
// let arrayExample = [1, 'two', 3, 'four', 5];
// let result = averageOfNumbers(arrayExample);
//
// console.log(result);
//
// // 2.
// function doMath (x, znak, y) {
//     x = +x;
//     y = +y;
//     if (isNaN(x) || isNaN(y)) {
//         return "Будь ласка, введіть коректні числа."
//     }
//
//     switch (znak) {
//         case '+':
//             return x + y;
//         case '-':
//             return x - y;
//         case '*':
//             return x * y;
//         case '/':
//             if (y === 0) {
//                 return "Ділення на нуль неможливе.";
//             }
//             return x / y;
//         case '%':
//             return x % y;
//         case '^':
//             return Math.pow(x, y);
//         default:
//             return "Невірний знак операції. Введіть один із: +, -, *, /, %, ^";
//
//     }
// }
//
// const x = prompt("Введіть перше число:");
// const znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
// const y = prompt("Введіть друге число:");
//
// const result = doMath(x, znak, y);
// console.log(result);


// // 3.
// function fillTwoDimensionalArray() {
//     let rows = +(prompt("Enter the number of rows:"));
//     let columns = +(prompt("Enter the number of columns:"));
//
//     if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
//         return "Please enter valid values for the array dimensions.";
//     }
//
//     const twoDimensionalArray = [];
//
//     for (let i = 0; i < rows; i++) {
//         let row = [];
//         for (let j = 0; j < columns; j++) {
//             const value = prompt(`Enter the value for element [${i}][${j}]:`);
//             row.push(value);
//         }
//         twoDimensionalArray.push(row);
//     }
//
//     return twoDimensionalArray;
// }
//
// const result = fillTwoDimensionalArray();
// console.log(result);
//



//4.
function removeCharacters(inputString, charactersToRemove) {
    let charsSet = new Set(charactersToRemove);

    let resultString = inputString.split('').filter(char => !charsSet.has(char)).join('');

    return resultString;
}

const userInputString = prompt("Enter a string:");
const charactersToRemoveInput = prompt("Enter characters to remove (comma-separated):");

const charactersToRemove = charactersToRemoveInput.split(',');

const result = removeCharacters(userInputString, charactersToRemove);
console.log(result);



