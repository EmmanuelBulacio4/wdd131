const input = document.querySelector("#favchap"); // Lo que escribe el usuario
const addButton = document.querySelector("button"); // Botón para agregar entrada
const list = document.querySelector("#list"); // Lista de capítulos

addButton.addEventListener("click", () => {
    const favBook = input.value.trim(); // Obtiene el valor ingresado y elimina espacios extra

    if (favBook !== "") { // Evita añadir entradas vacías
        const listItem = document.createElement("li"); // Crea un nuevo elemento de lista
        const listText = document.createElement("span"); // Crea un <span> para el texto
        const deleteButton = document.createElement("button"); // Botón para eliminar

        listText.textContent = favBook; // Añade el texto ingresado al <span>
        deleteButton.textContent = "❌"; // Texto del botón eliminar

        // Añade los elementos al <li> y luego a la lista
        listItem.appendChild(listText);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        // Limpia el campo de entrada
        input.value = "";

        // Evento para eliminar el elemento de la lista
        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        // Regresa el foco al campo de entrada
        input.focus();
    } else {
        alert("Por favor ingresa un capítulo válido.");
    }
});


// const input = document.querySelector("#favchap"); //Lo que escribe el usuario
// const addButton = document.querySelector("button"); //Boton agregar entrada.
// const list = document.querySelector("#list"); //Lista de capitulos.

// const listItem = document.createElement("li");   //Crea un item para la lista
// const deleteButton = document.createElement("button"); 

// listItem.textContent = input.value;  //Guarda el texto de entrada en la variable del listItem
// deleteButton.textContent = "❌";
// listItem.append(deleteButton);

// list.append(listItem);

// addButton.addEventListener("click", () => {
//     const favBook = input.value;
//     input.value = "";

//     const listBooks =  document.createElement("li");
//     const listText = createElement("span");
//     // const listButton = document.createElement("button");

//     listBooks.appendChild(listText);
//     listText.textContent(favBook);
//     listItem.appendChild(deleteButton);
    


//     deleteButtonBtn.addEventListener("click", ()=> {
//         list.removeChild(listItem);
//     });
// });