let number1 = +prompt('Enter the first number:');
let number2 = +prompt('Enter the second number:');
let sign = prompt('Enter the sign:');

let result;

switch (sign) {
    case '+':
        result = number1 + number2;
        break;

    case '-':
        result = number1 - number2;
        break;

    case '*':
        result = number1 * number2;
        break;

    case '/':
        result = number1 / number2;
        break;

    default:
        alert('Invalid operator!');
}

alert(`${number1} ${sign} ${number2} = ${result}`);
console.log(result);