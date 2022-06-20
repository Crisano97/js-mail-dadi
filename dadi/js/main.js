// Genero un numero randomico da 1 a 6, uno per il giocatore e uno per la IA;
// Stabilisco il vincitore in base a chi fa il punteggio più alto;
let userNumber = Math.floor((Math.random() * 6) +1);
let iaNumber = Math.floor((Math.random() * 6) +1);

console.log(userNumber, iaNumber);

if (userNumber > iaNumber) {
    console.warn('HAI VINTO');
} else if (userNumber < iaNumber) {
    console.warn('HAI PERSO ');
} else {
    console.warn('PAREGGIO');
}