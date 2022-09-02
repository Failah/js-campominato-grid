console.log('JS OK!');

/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
se il numero progressivo è pari, di verde se dispari. Inoltre emette un messaggio
in console con il numero della cella cliccata.

Bonus:
Potete sbizzarrirvi. Ad esempio mettendo i numeri da
1 a 100 in ordine random nelle celle, ma avete massima libertà!

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro
in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo 
i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/


const button = document.getElementById('activation-button');

button.addEventListener('click',
    function () {
        console.log('Hai cliccato il bottone di generazione griglia!');

        let grid = document.getElementById('grid');
        grid.innerHTML = '';

        for (let i = 1; i <= 100; i++) {
            const gridCell = document.createElement('div');

            gridCell.className = 'grid-cell';
            gridCell.innerHTML = i;

            gridCell.addEventListener('click',
                function () {
                    console.log('Hai cliccato la cella numero: ', i);

                    let numberEven = checkNumberEven(i);

                    if (numberEven) {
                        gridCell.classList.add('even-cell');
                    } else {
                        gridCell.classList.add('odd-cell');
                    }
                });

            grid.append(gridCell);
        }
    });


// FUNCTIONS

function checkNumberEven(num) {
    return num % 2 === 0;
}