function processArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const array = arrayInput.split(',').map(element => parseInt(element.trim()));

    array.sort((a, b) => a - b);
    displayArray("Масив відсортовано за зростанням:", array);

    array.splice(1, 3);
    displayArray("Елементи з 2 по 4 (включно) видалено:", array);
}

function displayArray(message, array) {
    const arrayContent = document.getElementById('arrayContent');
    const resultDiv = document.createElement('div');
    resultDiv.textContent = message + ' ' + array.join(', ');
    arrayContent.appendChild(resultDiv);
}
