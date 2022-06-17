// chiedo all'utente la sua email;
//controlla che sia nella lista di chi può accedere;
// stampa un messaggio appropriato sull'esito del controllo;

const currentEmail = ['ciro@gmail.com', 'giuseppe@gmail.com', 'paolo@gmail.com', 'silvio@gmail.com', 'luigi@gmail.com', 'ernesto@gmail.com', 'pino@gmail.com', 'luca@gmail.com', 'giovanni@gmail.com', 'mario@gmail.com', ];

const userEmail = prompt('Inserisci la tua email');
console.warn(userEmail);

let emailCheck = false;

for (let index = 0; index < currentEmail.length; index++) {

    console.log(currentEmail[index]);

    if (userEmail == currentEmail[index]) {
        emailCheck = true;
    }
    
}

if (emailCheck == true) {
    console.warn('Accesso consentito');
} else {
    console.warn('Accesso negato');
}



// console.log(emailCheck);
