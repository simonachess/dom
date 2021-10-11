const customerDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const buttonDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');


buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();

    let sriuba = 'nenori';
    let patiekalas = 'nenori';
    let desertas = 'nenori';
    let customer = 'nažinomu vardu';

    if (customerDOM.value.trim()) {
        customer = `vardu <strong>${customerDOM.value}</strong>`
    }

    if (sriubaDOM.checked) {
        sriuba = 'nori'
    } 

    if (patiekalasDOM.checked) {
        patiekalas = 'nori'
    } 

    if (desertasDOM.checked) {
        desertas = 'nori'
    } 

    const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');
    let pasirinktasGerimas='';
    
    for (const gerimas of gerimasDOM) {
        if (gerimas.checked) {
            pasirinktasGerimas = `<i>${gerimas.value}</i> yra pasirinktas gėrimas`;
            break;
        } else{
            pasirinktasGerimas = `<i>nieko</i> nenori gerti`
        }
    }

    orderDOM.innerHTML = `Užsakovas ${customer}
    <br /> <i>${sriuba}</i> sriubos,
    <br /> <i>${patiekalas}</i> pagrindinio patiekalo,
    <br /> <i>${desertas}</i> deserto ir
    <br /> ${pasirinktasGerimas}`;
})


//Konstantino sprendimas
// const customer = document.querySelector("#customer");
// const sriuba = document.querySelector("#sriuba");
// const patiekalas = document.querySelector("#patiekalas");
// const desertas = document.querySelector("#desertas");

// const sultys = document.querySelector("#sultys");
// const gira = document.querySelector("#gira");
// const pienas = document.querySelector("#pienas");

// const submit = document.querySelector("button");
// const message = document.querySelector(".order");

// function chosenDrink() {
//     if (sultys.checked) return sultys.value;
//     else if (gira.checked) return gira.value;
//     else if (pienas.checked) return pienas.value;
//     else return false;
// }

// console.log(chosenDrink());

// submit.addEventListener("click", e => {
//     e.preventDefault();
//     showMessage();
// });

// function showMessage() {
//     const drink = chosenDrink();
//     message.innerText = `
//   ${customer.value ? "Užsakovas vardu " + customer.value : "Nežinomas užsakovas"}
//   ${sriuba.checked ? "nori" : "nenori"} sriubos, ${patiekalas.checked ? "nori" : "nenori"} pagrindinio patiekalo,
//   ${desertas.checked ? "nori" : "nenori"} deserto ir 
//   ${drink ? drink + " yra pasirinktas gerimas." : "Nepasirinko gėrimo"} `;
// }


// Destytojo Rimanto Belovo sprendimas
// const nameDOM = document.getElementById('customer');
// const sriubaDOM = document.getElementById('sriuba');
// const patiekalasDOM = document.getElementById('patiekalas');
// const desertasDOM = document.getElementById('desertas');
// const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
// const submitDOM = document.querySelector('button[type="submit"]');
// const orderDOM = document.querySelector('.order');

// function arNori(DOM) {
//     return DOM.checked ? 'nori' : 'nenori';
// }

// function optionFromRadioList(listDOM) {
//     for (const itemDOM of listDOM) {
//         if (itemDOM.checked) {
//             return itemDOM.value;
//         }
//     }
//     return false;
// }

// submitDOM.addEventListener('click', function (e) {
//     e.preventDefault();

//     const name = nameDOM.value.trim();
//     const sakinioPradzia = name === '' ? 'nenurodes vardo' : `vardu ${name}`;

//     let pasirinktasGerimas = optionFromRadioList(gerimaiDOM);
//     const sakinioPabaiga = pasirinktasGerimas ? `${pasirinktasGerimas} yra pasirinktas gerimas` : 'gerimo nepasirinko';

//     orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNori(sriubaDOM)} sriubos, ${arNori(patiekalasDOM)} pagrindinio patiekalo, ${arNori(desertasDOM)} deserto ir ${sakinioPabaiga}.`;
// })