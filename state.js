
const state = {};


export function initialize() {
    
    state.attackDamage = [0, 0, 0, 1, 1, 1, 2, 2, 3];
    state.combatEvents = [];
    state.gob.hp = [1, 5, 10, 10, 100];
    state.gobs = [
        { name: 'Gobber', hp: 10 },
        { name: 'Goober', hp: 15 },
        { name: 'Gober', hp: 0 },
    ];
}

initialize();
export default state;

export function setCombatEvent(combatEvent) {
    state.combatEvents.push(combatEvent);
}



export function addGob(gob) {
    state.gobs.push(gob);
    console.log(gob);
}

export function updateGob(gob) {
    const index = state.gobs.indexOf(gob);
    if (index !== -1) {
        state.gobs[index] = gob;
    }
}