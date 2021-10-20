// Chiedi all’utente il suo nome,
const firstName = prompt("What's your name?");

// poi chiedi il suo cognome,
const lastName = prompt("What's your last name?");

// poi chiedi il suo colore preferito
const favColor = prompt("What's your favourite color?");

// Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21
document.getElementById("pw_gen").innerHTML = `Your best password is: ${firstName}${lastName}${favColor}21`;

// bonus
let createdPassword = `${firstName}${lastName}${favColor}21`;

document.getElementById("pw_span").innerHTML = createdPassword;