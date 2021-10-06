const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

let numberCount = 0;
const defaultText = h1DOM.innerText;
const changeText = 'Žaidimas progrese';
const startText = 'Tu pasileidai zaidima - sekmes!';
const minusText = 'Paspaudei minusa ir dabartinis rezultatas yra ';
const plusText = 'Paspaudei pliusa ir dabartinis rezultatas yra ';
const resetText = 'Paspaudei reset ir dabartinis rezultatas yra ';

const liDOM2 = document.createElement("li");
liDOM2.appendChild(document.createTextNode(startText));
ulDOM.appendChild(liDOM2);
// ulDOM.innerHTML = '<li>Tu pasileidai zaidima - sekmes</li>'


minusDOM.addEventListener('click', function() {
    numberCount--;
    numberDOM.innerText = numberCount;
    h1DOM.innerText = changeText;
    // ulDOM.innerHTML +=`'<li>Paspaudei minusa ir dabartinis rezultatas yra ${counter}</li>`;
    const liDOM = document.createElement("li");
    liDOM.appendChild(document.createTextNode(minusText + `${numberCount} `));
    ulDOM.appendChild(liDOM);

});


plusDOM.addEventListener('click', function () {
    numberCount++;
    numberDOM.innerText = numberCount;
    h1DOM.innerText = changeText;
    const liDOM = document.createElement("li");
    liDOM.appendChild(document.createTextNode(plusText + `${numberCount} `));
    ulDOM.appendChild(liDOM);
});

resetDOM.addEventListener('click', function () {
    numberDOM.innerText = 0;
    numberCount = 0;
    h1DOM.innerText = defaultText;
    const liDOM = document.createElement("li");
    liDOM.appendChild(document.createTextNode(resetText + `${numberCount} `));
    ulDOM.appendChild(liDOM);
    const liDOM2 = document.createElement("li");
    liDOM2.appendChild(document.createTextNode(startText));
    ulDOM.appendChild(liDOM2);
    
});



//kitas budas
// const plusDOM = formDOM.querySelector('.plus');
// const numberDOM = formDOM.querySelector('.number');
// const h1DOM = document.querySelector('h1');
// const ulDOM = document.querySelector('ul');

// const playText = 'Žaidimas progrese!';
// const h1DefaultText = h1DOM.innerText;
// let counter = 0;

// ulDOM.innerHTML = '<li>Tu pasileidai zaidima - sekmes!</li>';

// function contentUpdate(btnType, h1Text = 'Žaidimas progrese!') {
//     numberDOM.innerText = counter;
//     h1DOM.innerText = h1Text;
//     ulDOM.innerHTML += `<li>Paspaudei ${btnType} ir dabartinis rezultatas yra ${counter}.</li>`;
// }

// minusDOM.addEventListener('click', function () {
//     numberDOM.innerText = --counter;
//     h1DOM.innerText = playText;
//     --counter;
//     contentUpdate('minusa');
// });

// plusDOM.addEventListener('click', function () {
//     numberDOM.innerText = ++counter;
//     h1DOM.innerText = playText;
//     ++counter;
//     contentUpdate('pliusa');
// });

// resetDOM.addEventListener('click', function () {
//     counter = 0;
//     numberDOM.innerText = counter;
//     h1DOM.innerText = h1DefaultText;
//     contentUpdate('reset', h1DefaultText);


