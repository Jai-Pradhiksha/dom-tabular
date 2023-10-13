// Function to generate the table
function generateTable(rows, columns) {
    const table = document.createElement("table");
    const tableContainer = document.getElementById("tableContainer");

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement(i === 0 ? "th" : "td");
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.innerHTML = ""; // Clear the container
    tableContainer.appendChild(table);
}

// Add an event listener to the button
const generateTableButton = document.getElementById("generateTable");
generateTableButton.addEventListener("click", function () {
    const rows = prompt("Enter the number of rows:");
    const columns = prompt("Enter the number of columns:");

    if (rows && columns) {
        generateTable(Number(rows), Number(columns));
    }
});
