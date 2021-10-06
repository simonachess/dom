const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');

let numberCount = 0;

minusDOM.addEventListener('click', function() {
    numberCount--;
    numberDOM.innerText = numberCount;
});


plusDOM.addEventListener('click', function () {
    numberCount++;
    numberDOM.innerText = numberCount;
});

resetDOM.addEventListener('click', function () {
    numberDOM.innerText = 0;
    numberCount=0;
});


//kitas budas
const formDOM2 = document.querySelector('form:nth-child(1)'); //jeigu puslapyje butu daugiau formu, tai pirma susirandame forma ir paskui mygtukus
const plusDOM2 = formDOM2.querySelector('.plus');
const minusDOM2 = formDOM2.querySelector('.minus');
const resetDOM2 = formDOM2.querySelector('.reset');
const numberDOM2 = formDOM2.querySelector('.number');

let counter = 0;

minusDOM2.addEventListener('click', function (){
    numberDOM2.innerText = --counter;
});

plusDOM2.addEventListener('click', function (){
    numberDOM2.innerText = ++counter;
});

resetDOM2.addEventListener('click', function () {
    numberDOM.innerText = 0;
    counter = 0;
});
