// Step 5 CRear variables para input, button y list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 6 crear el elemento li
const entry = document.createElement('li');

// Step 7 creo el boton borrar
const delbutton = document.createElement('button');

// Step 8 tomo el valor de la entrada y lo asigno al elemento li
entry.textContent = input.value;

// Step 9 doy imagen al boton borrar
button.textContent = '❌';

// Step 10
list.append(entry)
