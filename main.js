function sumFunction() {
    let sum = 0;

    return function addValue(value) {
        sum += value;
        return sum;
    };
}

let newSumFunction = sumFunction();

console.log(newSumFunction(3));
console.log(newSumFunction(5));
console.log(newSumFunction(20));