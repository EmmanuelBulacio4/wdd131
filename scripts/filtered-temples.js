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


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salta City Argentina",
        location: "Salta City, Aregntina",
        dedicated: "2024, June, 16",
        area: 27000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
    },
    {
        templeName: "Buenos Aires City Argentina",
        location: "Buenos Aires City, Argentina",
        dedicated: "2012, September, 9",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Cordoba City Argentina",
        location: "Cordoba City, Argentina",
        dedicated: "2015, May, 17",
        area: 343969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    },

];

createTempleCard(temples);    //Esta linea hace que cuando se entre a la pagina aparezcan todos los templos.


const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newOne = document.querySelector("#new");
const smallTemples = document.querySelector("#small");
const largeTemples = document.querySelector("#large");

home.addEventListener("click", () => {
    createTempleCard(temples);
});

old.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples);});

newOne.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(oldTemples);});

largeTemples.addEventListener("click", () => {
    const large = temples.filter(temple => temple.area>90000);
    createTempleCard(large);
});

smallTemples.addEventListener("click", () => {
    const Small = temples.filter(temple => temple.area<10000);
    createTempleCard(Small);
});





function createTempleCard(filteredTemples){
    document.querySelector("#temples-grid").innerHTML = "";
    
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = (temple.templeName);
        location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label">Area:</span> ${temple.area} square feet`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector("#temples-grid").appendChild(card);
    }
    );
}