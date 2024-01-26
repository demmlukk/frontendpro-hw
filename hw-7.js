// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = [];
for (let i = 10; i <= 20; i++) {
    numbers.push(i);
}
console.log(numbers.join(', '));

// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

// Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

// Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
console.log(sum / 500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let num = 24; // Змініть це число на потрібне вам число
let divisors = [];
let evenDivisorsCount = 0;
let evenDivisorsSum = 0;
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
            evenDivisorsCount++;
            evenDivisorsSum += i;
        }
    }
}
console.log(`Дільники числа ${num}: ${divisors.join(', ')}`);
console.log(`Кількість парних дільників: ${evenDivisorsCount}`);
console.log(`Сума парних дільників: ${evenDivisorsSum}`);

// Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
