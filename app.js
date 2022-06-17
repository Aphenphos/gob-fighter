
import { getRandomHP, getRandomDamage, } from './utils.js';
import createGobs, { } from './components/Gobs.js';
import createAddGob from './components/addGob.js';
import state, { addCombatEvent, addGob, updateGobs, } from './state.js';
import { displayCombatLog } from './components/Message.js';
//player section
let playerHP = 10;


const playerHPDisplay = document.querySelector('#player-hp-display');
playerHPDisplay.textContent = playerHP;



//gob section
//creates gobs and handles attacks
    
let playerDamage = 0;
let gobDamage = 0;

const Gobs = createGobs(document.querySelector('#enemy-container'), {
    handleAttackGob: (gob, index) => {
        console.log(state.gobs[index]);
        if (state.gobs[index].hp !== null) {
            playerDamage = getRandomDamage();
            gobDamage = getRandomDamage();
            state.gobs[index].hp -= playerDamage;
            playerHP -= gobDamage;
            if (state.gobs[index].hp < 0) state.gobs[index].hp = 0;
            generateMessage(playerDamage, gobDamage);
            updateGobs();
            console.log(gob.hp, playerHP);
            display();
        }
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

//combatLog

function generateMessage(playerDamage, gobDamage) {
    const combatEvent = `you did ${playerDamage} damage and took ${gobDamage} damage`;
    addCombatEvent(combatEvent);
    console.log(state.combatLog);
}

// kill counter


function display() {
    Gobs({ gobs: state.gobs });
    AddGob({});
    displayCombatLog({});
}

display();
