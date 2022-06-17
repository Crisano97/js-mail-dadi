// chiedo all'utente la sua email;
//controlla che sia nella lista di chi può accedere;
// stampa un messaggio appropriato sull'esito del controllo;

const currentEmail = ['ciao@gmail.com', 'ciao@ibero.it', 'ciao@hotmail.com'];

const userEmail = prompt('Inserisci la tua email');
console.log(userEmail);

let emailCheck = false;

for (let index = 0; index < currentEmail.length; index++) {

    console.log(currentEmail[index]);

    if (userEmail == currentEmail[index]) {
        emailCheck = true;
    }
    
}

if (emailCheck == true) {
    console.log('Accesso consentito');
} else {
    console.log('Accesso negato');
}



console.log(emailCheck);
