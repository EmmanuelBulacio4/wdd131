//-------------Date------------------------
const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

//----------Form; List of preducts------------
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// ---------Add the options to the <select>------------
// Selecciono del documento el elemenmto select y lo guardo en una variable
const productsList = document.querySelector("select");

// Creo la instruccion para el usuario. el "Choose a product..."
const instruction = document.createElement("option"); 
instruction.textContent = "Choose a product...";
instruction.selected = true;                                //con esta linea aparece seleccionada la opcion
instruction.disabled = true;                               //con esta linea hago que no pueda seleccionarse por el usuario.
productsList.appendChild(instruction);                     //agrego la <option> a la variable donde esta guardada section


products.forEach(product => {                              //Con el bucle recorro cada producto de la lista
    const item = document.createElement("option");         //Creo la <opcion> que contendrá el producto
    item.value = product.id;                               //El value creo que sirve para el backend- Pero aqui lo agrego porque asi debe ser
    item.textContent = product.name; 
    productsList.appendChild(item);
});


//----------------localStorage------------------
//In other jsfile.
