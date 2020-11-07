import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const key = new Date().toISOString().slice(0, 10); 

const glassOfWaterNumber = document.querySelector('.water-glass__number-js');
const addButton = document.querySelector('.button_add-js');
const substractButton = document.querySelector('.button_substract-js');

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

    glassOfWaterNumber.animate([
        // keyframes
        { opacity: 0.5 }, 
        { opacity: 1 }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1,
      });
});

substractButton.addEventListener('click', (e) => {
    if(glassNumber > 0) {
        glassNumber--;
        glassOfWaterNumber.innerHTML = glassNumber;
        localStorage.setItem(key, glassNumber);
    }

    glassOfWaterNumber.animate([
        // keyframes
        { opacity: 0.5 }, 
        { opacity: 1 }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1,
      });
});