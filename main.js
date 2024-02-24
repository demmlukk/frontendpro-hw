//1
let input1 = prompt("Введіть перший рядок:");
let input2 = prompt("Введіть другий рядок:");
let input3 = prompt("Введіть третій рядок:");

let result = input2 + " " + input3 + " " + input1;
console.log(result);

//2
let numberInput = prompt("Введіть п'ятизначне число:");
let number = +(numberInput);

let digits = number.toString().split("").join(" ");

console.log(digits);
