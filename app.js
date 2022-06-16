import { getRandomItem, getRandomIndex } from './utils.js';

import state, {
    logCombat,
    addGob,
    updateGob,
} from './state.js';

import createCombatLog from './components/CombatLog.js';
import createNewGob from './components/NewGob.js';
import createGob from './components/Gobs.js';
import Gob from './components/Gobs.js';

const CombatLog = createCombatLog(document.querySelector('#combat-log'));

const Gobs = createGobs(document.querySelector('.enemy-container'), {
    handleAttackGob: (gob) => {
        if (state.attackDamage === 0){logCombat('You Missed!');}
        if (state.attackDamage === 1){logCombat('You did 1 Damage!');}
        if (state.attackDamage === 2){logCombat('You did 2 Damage!');}
        if (state.attackDamage === 3){logCombat('You did 3 Damage!');}
    } }
);


function display() {

}


display();
