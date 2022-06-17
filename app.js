
import { getRandomHP, getRandomDamage, } from './utils.js';
import createGobs, { } from './components/Gobs.js';
import createAddGob from './components/addGob.js';
import state, { addCombatEvent, addGob, updateGobs, } from './state.js';
import { displayCombatLog } from './components/Message.js';
//player section

let playerHP = 10;
let totalKills = 0;

function displayPlayerInfo() {
    const playerHPDisplay = document.querySelector('#player-hp-display');
    playerHPDisplay.textContent = `Player HP: ${playerHP}`;
    if (playerHP < 1) {
        if (confirm('Game Over!')){
            window.location.reload();  
        }
    }

    const totalKillsDisplay = document.querySelector('#player-kill-display');
    totalKillsDisplay.textContent = `Player Kills: ${totalKills}`;
}


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
            if (state.gobs[index].hp < 0) {state.gobs[index].hp = 0; }
            if (state.gobs[index].hp === 0) totalKills++;
            updateGobs();
            generateMessage(playerDamage, gobDamage);
            displayCombatLog();
            console.log(playerDamage);
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
    
    let combatEvent = `you did ${playerDamage} damage and took ${gobDamage} damage`;
    addCombatEvent(combatEvent);
    console.log(state.combatLog);
}

// kill counter


function display() {
    Gobs({ gobs: state.gobs });
    AddGob({});
    displayPlayerInfo({});
}

display();
