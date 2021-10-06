const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

// funkciju uzrasymo variantai

// const demo = () =>{
//     console.log('demo working..');
// }

// function demo(){
//     console.log('demo working..');
// }

// hamburgerDOM.addEventListener('click', demo);


// let logoClickCount = 0;

// hamburgerDOM.addEventListener('click', function () {
//     logoClickCount++;
//     if (logoClickCount % 2 === 1){
//         logoDOM.classList.add('.big');
//     }
//     else{
//         logoDOM.classList.remove('.big');
//     }
// });

const navDOM = document.querySelector('nav');

hamburgerDOM.addEventListener('click', function () {
    logoDOM.classList.toggle('big'); //jeigu nera klases ja uzdeda, jeigu yra klase - ja nuima. kai yra tik dvi busenos, verta naudoti toggle
    navDOM.classList.toggle('visible');
})



