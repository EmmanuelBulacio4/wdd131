//Año y Fecha en el Footer
const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

// Function WindChill
const wind = document.getElementById(speed);



// Function WindChill