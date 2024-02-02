function powerRecursive(num, degree) {
    if (degree === 0) {
        return 1;
    }
    else {
        return num * powerRecursive(num, degree - 1);
    }
}

let result = powerRecursive(5, 3);
console.log(result);