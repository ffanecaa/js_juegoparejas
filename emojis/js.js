const emojis = ['🕷️', '🪱', '🎃', '👻', '🕸️', '🦇', '👿','🍬','🧟','🧛'];
        let cards = [...emojis, ...emojis];
        let attempts = 0;

        function couple(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }


// tb puedeo /*
/*
 let groupColors = cards.slice(0, num / 2);
    let groupColorsDef = groupColors.concat(groupColors);
    let selectColors = groupColorsDef.sort(() => Math.random() - 0.5);
*/


        function createBoard() {
            cards = couple(cards);
            const gameBoard = document.getElementById('gameBoard');
            for (let i = 0; i < cards.length; i++) {
                const card = document.createElement('div');  // crear div
                card.classList.add('card');  // le damos clase pa estilo
                card.innerText = ' '; // contenido vacio
                card.style.backgroundColor ="grey";
                card.style.boxShadow ="0 0 0 ";
                card.dataset.index = i;
                card.dataset.emoji = cards[i];
                card.addEventListener('click', volteo);
                gameBoard.appendChild(card);
            }
        }

        let cardDescubierta = [];
        let locked = false; // controlador de 2 volteos

        function volteo() {
            if (locked) return; // si es tan 2 se ssale funcion
            if (cardDescubierta.length < 2) {
                this.innerText = this.dataset.emoji;   // si son iguales
                cardDescubierta.push(this);   // array para guardar las cartas boca arriba
            }

            if (cardDescubierta.length === 2) {
                locked = true;
                setTimeout(checkForMatch, 1000); // que espere antes de dar respuesta sino no daria tiempo
            }
        }
 // comprobar si son iguales el emoji es como texto  .. metodo dataset noe  vrificamos indices del array 
        function checkForMatch() {
            if (cardDescubierta[0].dataset.emoji === cardDescubierta[1].dataset.emoji) {
                cardDescubierta[0].removeEventListener('click', volteo); // le quitamos evento 
                cardDescubierta[1].removeEventListener('click', volteo);//
            } else {
                cardDescubierta[0].innerText = ' ';  // las volteamos 
                cardDescubierta[1].innerText = ' ';
            }

            cardDescubierta = [];  // array a cero 
            attempts++; // una partida mas
            document.getElementById('attempts').innerText = `Intentos: ${attempts}`;
            locked = false; // a false el numero cartas voletadas

             // hacer  controlador fin partida con un contador de aciertos con el array 

        }

        createBoard();