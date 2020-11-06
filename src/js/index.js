import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const key = new Date().toISOString().slice(0, 10); 

const glassOfWaterNumber = document.querySelector('.water-glass__number-js');
const addButton = document.querySelector('.add-js');
const substractButton = document.querySelector('.substract-js');

let glassNumber = localStorage.getItem(key);
if (glassNumber) {
    console.log(`wartość glassNumber: ${glassNumber}`);
}
else{
    glassNumber = 0;
}

glassOfWaterNumber.innerHTML = glassNumber;


addButton.addEventListener('click', (e) => {
    glassNumber++;
    glassOfWaterNumber.innerHTML = glassNumber;
    localStorage.setItem(key, glassNumber);

});

substractButton.addEventListener('click', (e) => {
    if(glassNumber > 0) {
        glassNumber--;
        glassOfWaterNumber.innerHTML = glassNumber;
        localStorage.setItem(key, glassNumber);
    }
});