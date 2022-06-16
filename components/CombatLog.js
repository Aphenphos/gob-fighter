export default function logCombatEvent(root) {
    return ({ combatEvent }) => {
        root.textContent = combatEvent;
    };
}


