const state = {};


export function initialize() {

    state.gobs = [
        { name: 'gobo', hp: 5, }
    ];

    state.gobFaces = ['X_x', 'O_O', '(◣_◢)', '<>_<>', '<>_<>', '<>_<>', '<>_<>', '<>_<>'];

    state.combatLog = [];
}

initialize();

export default state;

export function addGob(gob) {
    state.gobs.push(gob);
}

export function updateGobs(gob) {
    const index = state.gobs.indexOf(gob);
    if (index !== -1) {
        state.gobs[index] = gob;
    }
}