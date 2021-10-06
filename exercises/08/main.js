const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');

let numberCount = 0;
const defaultText = h1DOM.innerText;
const changeText = 'Žaidimas progrese';

minusDOM.addEventListener('click', function() {
    numberCount--;
    numberDOM.innerText = numberCount;
    h1DOM.innerText = changeText;
});


plusDOM.addEventListener('click', function () {
    numberCount++;
    numberDOM.innerText = numberCount;
    h1DOM.innerText = changeText;
});

resetDOM.addEventListener('click', function () {
    numberDOM.innerText = 0;
    numberCount = 0;
    h1DOM.innerText = defaultText;
});






//kitas budas
// const formDOM2 = document.querySelector('form'); //jeigu puslapyje butu daugiau formu, tai pirma susirandame forma ir paskui mygtukus
// const plusDOM2 = formDOM2.querySelector('.plus');
// const minusDOM2 = formDOM2.querySelector('.minus');
// const resetDOM2 = formDOM2.querySelector('.reset');
// const numberDOM2 = formDOM2.querySelector('.number');

// let counter = 0;

// minusDOM2.addEventListener('click', function (){
//     numberDOM2.innerText = --counter;
    
// });

// plusDOM2.addEventListener('click', function (){
//     numberDOM2.innerText = ++counter;
// });

// resetDOM2.addEventListener('click', function () {
//     numberDOM2.innerText = 0;
//     counter = 0;
// });




