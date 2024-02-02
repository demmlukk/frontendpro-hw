function powerRecursive(num, degree) {
    // Базовий випадок: якщо ступінь дорівнює 0, повертаємо 1
    if (degree === 0) {
        return 1;
    }
    // Рекурсивний випадок: зводимо число в попередній ступінь та множимо на саме число
    else {
        return num * powerRecursive(num, degree - 1);
    }
}

// Приклад використання
let result = powerRecursive(2, 3);  // Зводимо 2 до ступеня 3
console.log(result);