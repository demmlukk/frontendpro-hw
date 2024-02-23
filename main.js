const tableContainer = document.getElementById("table-container");

const table = document.createElement("table");

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();

    for (let j = 1; j <= 10; j++) {
        let cell = row.insertCell();
        cell.textContent = (i - 1) * 10 + j;
    }
}

tableContainer.appendChild(table);