// creo la variable para guardar la fecha
const date = new Date();

// Recupero solo el año de la fecha
const year = date.getFullYear();

//Agarro la variable year y la introduzco en el elemento correspondiente.
document.getElementById("currentyear").textContent = year;

//AHORA EL "lastModified"

//Creo la variable para guardar la fecha. ("let" porque es un dato que va a cambiar.)
let lastModification = new Date();

let formattedDate = lastModification.toLocaleString('en-US', {
day: '2-digit',
month: 'long',
year: 'numeric',
hour: '2-digit',
minute: '2-digit',
});

// document.getElementById("lastModified").textContent = lastModification;
document.getElementById("lastModified").textContent = formattedDate;