const liDOMs = document.querySelectorAll('li');

for(let i=0; i<liDOMs.length; i++){
    const ingredientas = liDOMs[i];
    const pavadinimas = ingredientas.textContent;
    // console.log(pavadinimas)
}

// alternatyva
// for (let ingredientas of liDOMs) {
//     console.log(ingredientas.textContent);
// }

let listOfIngredients=[];
for (let i = 0; i < liDOMs.length; i++) {
    const ingredientas = liDOMs[i];
    const pavadinimas = ingredientas.textContent.toUpperCase();
    listOfIngredients.push(pavadinimas)
    console.log(pavadinimas);
} 

console.log(listOfIngredients);