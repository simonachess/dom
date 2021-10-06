const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio darzas'


const liDOM = document.querySelectorAll('li');

for (ingredients of liDOM) {
    ingredients.innerText = 'israuta darzove';
}

// for(let i=0; i<liDOM.length; i++){  
//     liDOM[i].innerText='israuta darzove 2222';
// }
