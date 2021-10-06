const customerDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const buttonDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');


buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();

    let sriuba, patiekalas, desertas, customer;

    if (customerDOM.value) {
        customer = customerDOM.value
    } else {
        customer = 'Nezinomas'
    }

    if (sriubaDOM.checked) {
        sriuba = 'nori'
    } else {
        sriuba = 'nenori'
    }
    if (patiekalasDOM.checked) {
        patiekalas = 'nori'
    } else {
        patiekalas = 'nenori'
    }
    if (desertasDOM.checked) {
        desertas = 'nori'
    } else {
        desertas = 'nenori'
    }


    const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');
    let pasirinktasGerimas;
    
    for (const gerimas of gerimasDOM) {
        if (gerimas.checked) {
            pasirinktasGerimas = `${gerimas.value} yra pasirinktas gerimas`;
            break;
        } else{
            pasirinktasGerimas = 'nieko nenori gerti'
        }
    }

    orderDOM.innerHTML = `Uzsakovas vardu <strong>${customer}</strong>
    <br /> ${sriuba} sriubos,
    <br /> ${patiekalas} pagrindinio patiekalo,
    <br /> ${desertas} deserto ir 
    <br /> ${pasirinktasGerimas}`;
})
