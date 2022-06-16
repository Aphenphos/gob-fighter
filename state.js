
const state = {};


export function initialize() {
    
    state.attackDamage = [0, 0, 0, 1, 1, 1, 2, 2, 3];
    state.combatLog = [];
    state.gobs = [
        { name: 'Gobber', hp: 10 },
        { name: 'Goober', hp: 15 },
        { name: 'Gober', hp: 5 },
    ];
}

initialize();
export default state;

export function logCombat(combatEvent) {
    state.combatLog.push(combatEvent);
    console.log(combatEvent);
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