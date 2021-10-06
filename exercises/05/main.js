

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio pomidoru darzas';
h1DOM.classList.add('pavadinimas');


const liDOM = document.querySelectorAll('li');

for (ingredients of liDOM) {
    ingredients.innerText = 'Pomidoras';
    ingredients.classList.add('pomidoras');
}
