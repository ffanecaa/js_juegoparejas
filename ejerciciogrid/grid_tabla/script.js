/*# Ejercicio de Grid
Crear una página html con dos inputs(filas y columnas) y un botón y un div de 400x400 px.
- Tiene que tener un script y una hoja de estilos.
- La página tiene que generar una cuadricula en el div.
### por ejemplo:
> Si ponemos 2, 2 y pulsamos creará 4 elementos, 2 por fila , de 200x200 px.
> Si ponemos 4, 2 y pulsamos creará 8, 4 por fila, de 100x200 px.
> Si ponemos 4, 4 y pulsamos creará 16, 4 por fila en 4 columnas, de 100x100 px.*/

document.getElementById('button').addEventListener('click', function() {
    let col = document.getElementById('col').value;
    let row = document.getElementById('row').value;
    generarGrid(col, row);
});

function generarGrid(col, row) {
    let div = document.getElementById('div');
    div.innerHTML = '';

    let tabla = document.createElement('table');
    tabla.style.setProperty('--col', col);
    tabla.style.setProperty('--row', row);
    
    for (let i = 0; i < row; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            let celda = document.createElement('td');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    div.appendChild(tabla);
}



 
