const head = document.querySelector('#head');
const Subscribe = document.querySelector('.Subscribe');
const text = document.querySelector('.t');

function ChangeContent() {
    head.textContent = "Welcome To Dom!"
}

function subscribeBtn() {
    Subscribe.textContent = "Subscribed!"
}

function ChangeElement() {
    text.innerHTML = `Welcome to my <strong> Platform <strong/>`
}