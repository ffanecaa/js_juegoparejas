
document.getElementById('button2').addEventListener('click', function() {

    let num1 =parseInt(document.getElementById("num1").value);
    let num2 =parseInt( document.getElementById("num2").value);
    generate(num1,num2)
    console.log(num1+num2)
})
     
 function generate( num1 ,num2) {
   
    let container = document.getElementById("container");
    container.innerHTML='';
    container.style.gridTemplateColumns = `repeat(${num1},1fr)`; //para poder variar el número de elementos de la cuadrícula en columnas
    container.style.gridTemplateRows = `repeat(${num2},1fr)`;  //lo mismo pero en filas
    for (let i = 0; i < num1 ; i++) {
        for (let j = 0; j < num2 ; j++) {
        let grido = document.createElement("div");
        grido.classList.add("grido")  //para poder darle estilo a cada div que se vaya creando se mete en una clase grid
        container.appendChild(grido);
    }
} }



let tiempo = 0;
setInterval(function() {
    tiempo++;
    document.getElementById('time').textContent = `Tiempo: ${tiempo} segundos`;
}, 1000);

/*   Ahora la aplicación contará desde que se pulsa el botón generar:
  - Encima de la grid saldrá un campo de tiempo que irá incrementando cada segundo
  - Este campo usará el método de javascript "setInterval(function () {ACCIONES}, MILISEGUNDOS);"
  -Ejemplo que hace un alert con un hola mundo cada 10 segundos: setInterval(function () {alert("Hello world")}, 10000);
- Ahora la aplicación aceptará solo un valor
- El valor tiene que ser un número par, en caso de no serlo mostrará un error y no hará nada
- Con el valor se intentará montar un grid lo más cuadrado posible, para ello se realizarán las siguientes operaciones:
  - Sus elementos internos deben medir todos lo mismo
  - Se calculará la raiz cuadrada del número sqrt()
  - La raiz cuadrada significará las filas y columnas que nos gustaría que ocupara la grid
  - En función del resto la grid tendrá que crecer en filas y columnas para que todos los elementos quepan
### por ejemplo:
>Si ponemos 8 se generará un
de juanjose.alvarezg@gmail.com a todos:    1:52 PM
### por ejemplo:
>Si ponemos 8 se generará una grid de 3 x 3 con 8 elementos dentro y un hueco vacío al final
>Si ponemos 20 se generará una grid de 5 x 4 completamente llena
>Si ponemos 22 se generará una grid de 5 x 5 con tres huecos libres al final*/