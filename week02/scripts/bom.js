// Step 5 CRear variables para input, button y list
const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');

addButton.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

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
    input.focus();
});