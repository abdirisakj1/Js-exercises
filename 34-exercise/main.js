// adding element and removing element
const fruits = document.querySelector('#fruits');

function addItem() {
    const NewFruit = document.createElement('li');
    NewFruit.textContent = 'mango🥭';
    fruits.appendChild(NewFruit);
};

function removeItem() {
    // if exists
    if(fruits.lastChild) {
        fruits.removeChild(fruits.lastChild)
    }
}