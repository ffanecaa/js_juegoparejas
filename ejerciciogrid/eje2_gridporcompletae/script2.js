document.getElementById('button2').addEventListener('click', function() {
    let num = parseInt(document.getElementById("num").value);

    if (num % 2 !== 0) {
        console.error("El valor debe ser un número par.");
        alert("¡escribe un numero par!")
        return;
    }

    generate(num);
    console.log(num);
    startTimer();
});

function generate(num) {
    let container = document.getElementById("container");
    container.innerHTML = '';
    let raiz = Math.sqrt(num);

    let rows = Math.floor(raiz);
    let cols = rows;

    container.style.gridTemplateColumns = `repeat(${cols},1fr)`;
    container.style.gridTemplateRows = `repeat(${rows},1fr)`;

    for (let i = 0; i < num; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}

function startTimer() {
   
    let timer = 0;
    let timerElement = document.getElementById("timer");
    timerElement.innerHTML="";
    
    setInterval(function() {
        timer++;
        timerElement.innerText = `Tiempo: ${timer} segundos`;
        if (timer % 20 === 0) {
            alert("¡Han pasado 20 segundos!");}
    }, 1000);
}
