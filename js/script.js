// Chiedi all’utente il suo nome,
let firstName = prompt("What's your name?");

// poi chiedi il suo cognome,
let lastName = prompt("What's your last name?");

// poi chiedi il suo colore preferito
let favColor = prompt("What's your favourite color?");

// Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21
document.getElementById("pw_gen").innerHTML = `La password assegnata è: ${firstName}${lastName}${favColor}21`;