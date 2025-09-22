// Step 5 CRear variables para input, button y list
const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');

addButton.addEventListener('click', () => {
    const myItem = input.value;  //.value toma el valor que ingresa el usuario.

    if (input.value.trim() !==''){      //.trim() method elimina los espacios en blanco del inicio y del final del valor ingresado por el usuario.
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
        
        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        })
        input.value = ''; //pone el valor de la entrada vacio. Sino siempore quedaria el primer valor ingresado
        input.focus();
    }
});