//Recorrido de arrays y generación de rows y celdas por cada key
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
    }
}

//Obteniendo data de API pública - generando tabla en HTML
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((posts) => {
        let table = document.querySelector("table");
        generateTable(table, posts);

        console.log(posts);

    })
