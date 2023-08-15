let board = ['', '', '', '', '', '', '', '', '']; // Array che rappresenta la griglia di gioco
let currentPlayer = 'X'; // Simbolo del giocatore corrente

function makeMove(index) {
    if (board[index] === '') { // Controlla se la cella è vuota
        board[index] = currentPlayer; // Assegna il simbolo del giocatore corrente alla cella
        document.getElementsByClassName('cell')[index].innerHTML = currentPlayer; // Aggiorna la visualizzazione del simbolo nella cella nell'interfaccia
        if (checkWin()) { // Controlla se c'è una combinazione vincente
            alert('Giocatore ' + currentPlayer + ' ha vinto!'); // Mostra un messaggio di vittoria
            resetBoard(); // Resetta la griglia di gioco
        } else if (board.indexOf('') === -1) { // Controlla se la griglia è piena (pareggio)
            alert('La partita è finita in pareggio!'); // Mostra un messaggio di pareggio
            resetBoard(); // Resetta la griglia di gioco
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Cambia il turno al prossimo giocatore
        }
    }
}

function checkWin() {
    const combinazioniVincenti = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Righe
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonne
        [0, 4, 8], [2, 4, 6] // Diagonali
    ];
    
    for (let combinazione of combinazioniVincenti) {
        // Itera attraverso ogni combinazione vincente
        if (
            board[combinazione[0]] === currentPlayer && // Controlla se la cella 1 contiene il simbolo del giocatore corrente
            board[combinazione[1]] === currentPlayer && // Controlla se la cella 2 contiene il simbolo del giocatore corrente
            board[combinazione[2]] === currentPlayer // Controlla se la cella 3 contiene il simbolo del giocatore corrente
            ) {
                return true; // Restituisce true se c'è una combinazione vincente
            }
        }
        return false; // Restituisce false se non c'è una combinazione vincente
    }
    
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', '']; // Resetta la griglia di gioco
        currentPlayer = 'X'; // Resetta il giocatore corrente
        const celle = document.getElementsByClassName('cell');
        for (let cella of celle) {
            cella.innerHTML = ''; // Rimuove i simboli dalla griglia nell'interfaccia
        }
    }
