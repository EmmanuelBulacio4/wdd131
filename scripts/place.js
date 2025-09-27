//Año y Fecha en el Footer
const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

// Function WindChill
const windSpeed = document.getElementById(speed);
const temp = document.getElementById(temperature);




// Function WindChill

function calculateWindChill (degree, wind) {
    if (degree>=10 && wind>4.8){
        let windChill = 13.12 + 0.6215*degree - 11.37*(wind**0.16)+0.3965*degree*(wind**0.16);
        return windChill
    }
    else
        return "N/A"
}