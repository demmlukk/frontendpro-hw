let operation = prompt('What do you want to do? (add, sub, mult, div):');
let number1 = +prompt('Enter the first number:');
let number2 = +prompt('Enter the second number:');

let result;

switch (operation) {
    case 'add':
        result = number1 + number2;
        break;

    case 'sub':
        result = number1 - number2;
        break;

    case 'mult':
        result = number1 * number2;
        break;

    case 'div':
        result = number1 / number2;
        break;

    default:
        alert('Invalid operator!');
}

alert(`${number1} ${operation} ${number2} = ${result}`);
console.log(result);