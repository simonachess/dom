const submitButton = document.querySelector('button');
const spanDOM = document.querySelector('span');
const inputDOM = document.querySelector('input');


submitButton.addEventListener('click', function(event){
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value='';
})