document.addEventListener("DOMContentLoaded", function () {
  let contadorAciertos = 0;
  let timerInterval;
  
  document.getElementById("button2").addEventListener("click", function () {
    let num = parseInt(document.getElementById("num").value);
    if (num % 2 !== 0 || num > 50) {
      
      alert("¡Escribe un número par y menor o igual a 50!");
      return;
    }
generate(num);
   });
  function generate(num) {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let raiz = Math.sqrt(num);
    let rows = Math.floor(raiz);
    let cols = rows;
    


    /*if (rows%2!=0){
        rows++
     }*/
    
    container.style.gridTemplateColumns = `repeat(${cols},1fr)`;
    container.style.gridTemplateRows = `repeat(${rows},1fr)`;
   const colors = ["yellow","orange","red","blue","green","magenta","blueviolet","pink","maroon","lime","aqua","darkorange","olive","grey","gold","darkcyan","silver","purple","navy","teal","beige","darkslateblue","LawnGreen","deeppink","indigo","salmon","tomato","Khaki","Thistle","LightSkyBlue","Aquamarine","Peru"];

    // slice agrupo colores segn need , los duplico y aleatorizo
    let groupColors = colors.slice(0, num / 2);
    let groupColorsDef = groupColors.concat(groupColors);
    let selectColors = groupColorsDef.sort(() => Math.random() - 0.5);

    for (let i = 0; i < num; i++) {
      let grid = document.createElement("div");
      grid.classList.add("grid");
      container.appendChild(grid);
      grid.dataset.color = selectColors[i]; // Guardar el color como un atributo de datos
      grid.style.backgroundColor = "rgb(219, 211, 68);"; // sin color
    }
    let elementosGrid = document.querySelectorAll(".grid");
    let contadorClicks = 0;
    let primerElemento = null;

      elementosGrid.forEach((elemento) => {
      elemento.addEventListener("click", eventoclick);
    });
    function eventoclick(event) {
      if (contadorClicks < 2) {
        let elemento = event.target;//el selecc 
        elemento.style.backgroundColor = elemento.dataset.color; //  colorincho
        contadorClicks++;

        if (contadorClicks === 1) {
          primerElemento = elemento;
        } else {
          compararColores(primerElemento, elemento);
        }
      }
    }
    function compararColores(elemento1, elemento2) {
      let color1 = elemento1.dataset.color;
      let color2 = elemento2.dataset.color;

      if (color1 === color2) {
        let aciertos = document.getElementById("aciertos");
        contadorAciertos++;
        aciertos.innerText = `Llevas ${contadorAciertos} aciertos`;
        contadorClicks = 0; // Reinicio contador sel
        if (contadorAciertos ===num / 2) {
              mensaje();
         
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } else {
        setTimeout(() => {
          elemento1.style.backgroundColor = "rgb(219, 211, 68)"; // Ocultar color
          elemento2.style.backgroundColor = "rgb(219, 211, 68)";
          contadorClicks = 0;
        }, 1000);
      }
    }
    function mensaje() {
      let ganador = document.querySelector("h2");
      ganador.innerText = "¡Has ganado! 🎉";
      clearInterval( timerInterval)
    }
    function startTimer() {
   
        let timer = 0;
        let timerElement = document.getElementById("timer");
        timerElement.innerHTML="";
        
        timerInterval= setInterval(function() {
            timer++;
            timerElement.innerText = `Tiempo: ${timer} segundos`;      
        }, 1000);
    }
    startTimer();
  }
});
