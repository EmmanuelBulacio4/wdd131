//Año y Fecha en el Footer.

const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

//hamburguer button

const burgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    burgerButton.classList.toggle('open');
});