//Date to the footer
const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

//hamburguer button
const burgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.lists');

burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    burgerButton.classList.toggle('open');
});


//Algoritmo BannerApp
const phrase = document.getElementById("userInput");
const runApp = document.querySelector("button");

runApp.addEventListener("click", () => {
    const entryText = phrase.value.trim();

    if (entryText !== "") {
        let listItem = document.getElementById("list");
        listItem.innerHTML = "";
        // const chars = [
        //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        //     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        //     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        // ];

        const lowerCaseLetters = Array.from(entryText.toLowerCase());
        const readyToRun = justLettNum(lowerCaseLetters);

        const counts = {}; // acá guardamos los conteos

        for (const ch of readyToRun) {
            counts[ch] = (counts[ch] || 0) + 1;
        }

        // Crear los <li> con los resultados
        for (const ch in counts) {
            const li = document.createElement("li");
            li.textContent = `${ch}: ${counts[ch]}`;
            listItem.appendChild(li);
        }
    }
    else {
        alert("Write o paste a phrase.");
    }
});


function justLettNum(inputArray) {
    const letterArray = inputArray
        .join('')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')   // Elimina todo lo que no sea letra ni numeros
        .split('');                   // Lo devolvemos como array de letras
    return letterArray;
}