
import { getRandomHP, getRandomDamage, } from './utils.js';
import createGobs, { } from './components/Gobs.js';
import createAddGob from './components/addGob.js';
import state, { addGob, updateGobs } from './state.js';

//player section
var playerHP = 10;
const playerHPDisplay = document.querySelector('#player-hp-display');
playerHPDisplay.textContent = playerHP;



//gob section
//creates gobs and handles attacks
const Gobs = createGobs(document.querySelector('#enemy-container'), {
    handleAttackGob: (gob) => {
        if (state.gob.hp > -1) {
            gob.hp -= getRandomDamage();
            playerHP -= getRandomDamage(); 
            updateGobs();
            console.log(gob.hp, playerHP);
        }
        display();
    }
});


//handles new goblins and generates their hp
const AddGob = createAddGob(document.querySelector('#new-gob-input'), {
    handleAddGob: (name) => {
        const gob = {
            name: name,
            hp: getRandomHP(),
        };
        addGob(gob);
        display();    
    }
});





function display() {
    Gobs({ gobs: state.gobs });
    AddGob({});
}

display();
