// Espera a que todo el HTML se cargue antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Footer (se mantiene igual)
    const today = new Date();
    const year = today.getFullYear();
    // Nota: El elemento #currentyear y #lastModified deben existir en el HTML.
    const currentYearElement = document.querySelector("#currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = year;
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        let lastModification = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModification.toLocaleDateString("en-US");
    }

    // 2. Lógica del Botón Hamburguesa (se mantiene igual)
    const burgerButton = document.querySelector('#hamburger');
    const navigation = document.querySelector('.lists');

    if (burgerButton && navigation) {
        burgerButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            burgerButton.classList.toggle('open');
        });
    }

    // 3. Algoritmo BannerApp (La corrección principal está aquí)
    // Usar la clase del botón para asegurar la selección correcta.
    const phrase = document.getElementById("userInput");
    const runApp = document.querySelector(".appButton"); // Seleccionar por CLASE es más específico que por "button"

    // Verificamos que ambos elementos existan antes de agregar el event listener
    if (runApp && phrase) {
        runApp.addEventListener("click", (event) => {
            // Prevenir el comportamiento por defecto (por si acaso es un submit)
            event.preventDefault();

            const entryText = phrase.value.trim();
            const listItem = document.getElementById("list");

            if (entryText !== "" && listItem) {

                listItem.innerHTML = "";

                const lowerCaseLetters = Array.from(entryText.toLowerCase());
                // Asegúrate de que la función justLettNum esté definida o incluida
                const readyToRun = justLettNum(lowerCaseLetters);

                const counts = {}; // acá guardamos los conteos

                for (const ch of readyToRun) {
                    counts[ch] = (counts[ch] || 0) + 1;
                }

                // Crear los <li> con los resultados y ordenar
                // Convertir a array de [letra, conteo] y ordenar por letra
                const sortedCounts = Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));

                for (const [ch, count] of sortedCounts) {
                    const li = document.createElement("li");
                    li.textContent = `${ch.toUpperCase()} needed: ${count}`;
                    listItem.appendChild(li);
                }
            } else {
                alert("Write or paste a phrase.");
            }
        });
    }
}); // Fin de DOMContentLoaded

// Esta función es un helper y puede estar fuera o dentro del DOMContentLoaded
function justLettNum(inputArray) {
    const letterArray = inputArray
        .join('')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
        .replace(/[^a-z0-9]/g, '')     // Elimina todo lo que no sea letra ni numeros (ya están en minúscula)
        .split('');
    return letterArray;
}