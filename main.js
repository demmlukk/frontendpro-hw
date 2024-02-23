//1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//2
const exchangeRate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    let uah = dollars * exchangeRate;
    console.log(dollars + " доларів = " + uah + " гривень");
}

//3
const N = 100;
for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= N) {
        console.log(i + " (" + square + ")");
    }
}

//4
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const numToCheck = 23;
if (isPrime(numToCheck)) {
    console.log(numToCheck + " - просте число");
} else {
    console.log(numToCheck + " - не просте число");
}

//5
function isPowerOfThree(number) {
    if (number <= 0) {
        return false;
    }
    while (number % 3 === 0) {
        number /= 3;
    }
    return number === 1;
}

const numToCheck = 56;
if (isPowerOfThree(numToCheck)) {
    console.log(numToCheck + " можна отримати зведенням числа 3 у ступінь");
} else {
    console.log(numToCheck + " не можна отримати зведенням числа 3 у ступінь");
}