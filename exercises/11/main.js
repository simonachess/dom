const submitButton = document.querySelector('button');
const spanDOM = document.querySelector('span');
const inputDOM = document.querySelector('#message');
const bgColorDOM = document.querySelector('#bg-color');
const textColorDOM = document.querySelector('#text-color');

inputDOM.style.color="red";

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    spanDOM.style.background = bgColorDOM.value;
    spanDOM.style.color = textColorDOM.value;
    inputDOM.value = '';
})