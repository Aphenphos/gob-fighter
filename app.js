import { getRandomItem, getRandomIndex } from './utils.js';

import state, {
    addGob,
    setCombatEvent,
    updateGob,
} from './state.js';

import logCombatEvent from './components/CombatLog.js';
import createNewGob from './components/NewGob.js';
import createGobs from './components/Gobs.js';
import createPlayer, { Player } from './components/Player.js';

const CombatLog = logCombatEvent(document.querySelector('#combat-log'));

const Gobs = createGobs(document.querySelector('#enemy-container'), {
    handleAttackGob: (gob) => {
        if (state.attackDamage === 0){setCombatEvent('you missed');}
        else if (state.attackDamage === 1){
            gob.hp - state.attackDamage; 
            setCombatEvent('you did 1 damage');
            updateGob(gob);
        }
        else if (state.attackDamage === 2){
            gob.hp - state.attackDamage; 
            setCombatEvent('you did 2 damage');
            updateGob(gob);
        }
        else if (state.attackDamage === 3){
            gob.hp - state.attackDamage; 
            setCombatEvent('you did 3 damage');
            updateGob(gob);
        }
        display();
    } }

);

const AddGob = createNewGob(document.querySelector('#new-gob-input'), {
    handleNewGob: (name) => {
        const gob = {
            name: name,
            hp: state.gob.hp
        };
        addGob(gob);
        display();
    }
});


function display() {
    CombatLog({ combatLog: state.combatEvents });
    Gobs ({ gobs: state.gobs });
    AddGob({});
}



display();
