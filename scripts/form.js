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

const productsList = document.querySelector("select");

const instruction = document.createElement("option");
instruction.textContent = "Choose a product...";
instruction.selected = true;
instruction.disabled = true;
productsList.appendChild(instruction);


products.forEach(product => {
    const item = document.createElement("option");
    item.value = product.id;
    item.textContent = product.name;
    productsList.appendChild(item);
})