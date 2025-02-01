function createTable() {
    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear existing table content

    const rowInput = prompt('Input number of rows');
    if (rowInput === null) return; // User pressed Cancel for rows

    const colInput = prompt('Input number of columns');
    if (colInput === null) return; // User pressed Cancel for columns

    const numRows = parseInt(rowInput, 10);
    const numCols = parseInt(colInput, 10);

    if (isNaN(numRows) || isNaN(numCols) || numRows < 0 || numCols < 0) {
        return; // Invalid input values
    }

    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}