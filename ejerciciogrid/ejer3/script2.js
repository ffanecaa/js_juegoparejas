document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button2').addEventListener('click', function() {
      let num = parseInt(document.getElementById("num").value);
  
      if (num % 2 !== 0 || num > 50) {
          console.error("El valor debe ser un número par y menor o igual a 50.");
          alert("¡Escribe un número par y menor o igual a 50!");
          return;
      }
  
      generate(num);
    });
  
    function generate(num) {
      let container = document.getElementById("container");
      container.innerHTML = '';
      let raiz = Math.sqrt(num);
  
      let rows = Math.floor(raiz);
      let cols = rows;
  
      container.style.gridTemplateColumns = `repeat(${cols},1fr)`;
      container.style.gridTemplateRows = `repeat(${rows},1fr)`;
  
      const colors = ["yellow","orange","red","blue","green","magenta","blueviolet","pink","maroon","lime","aqua","olive","grey","gold","cyan","silver","purple","navy","teal","beige","darkslateblue","deeppink","fuchsia","salmon"];
  
      // slice agrupo colores segn need , los duplico y aleatorizo
  
      let groupColors = colors.slice(0,num/2);
      let groupColorsDef = groupColors.concat(groupColors);
  
      let selectColors = groupColorsDef.sort(() => Math.random()-0.5);
  
      
      for (let i = 0; i < num; i++) {
          let grid = document.createElement("div");
          grid.classList.add("grid");
          container.appendChild(grid);
          grid.dataset.color = selectColors[i]; // Guardar el color como un atributo de datos
          grid.style.backgroundColor = 'white'; // color blanco
      }
  
      let elementosGrid = document.querySelectorAll('.grid');
  
      let contadorClicks = 0;
      let primerElemento = null;
  
      elementosGrid.forEach(elemento => {
        elemento.addEventListener('click', eventoclick);
      });
  
      function eventoclick(event) {
        if (contadorClicks < 2) {
            let elemento = event.target;
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
            console.log("Los colores son iguales.");
            contadorClicks = 0; // Reinicio contador
        } else {
            setTimeout(() => {
                elemento1.style.backgroundColor = 'white'; // Ocultar color
                elemento2.style.backgroundColor = 'white'; 
                contadorClicks = 0; 
            }, 1000);
        }
      }
    }
  });
  