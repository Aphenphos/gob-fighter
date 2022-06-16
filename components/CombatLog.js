export default function createCombatLog(root) {
    return ({ combatEvent }) => {
        root.textContent = combatEvent;
    };
}