import state from '../state.js';


export function displayCombatLog() {
    const span = document.createElement('span');
    span.classList.add('combat-log-message');
    const container = document.querySelector('#combat-log');
    console.log('happening');
    state.combatLog.forEach(item => {
        span.textContent = (item);
        container.append(span);
    });
}