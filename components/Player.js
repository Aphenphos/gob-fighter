export default function createPlayer(root) {
    return ({ player }) => {
        root.innerHTML = '';
        const playerElement = Player({ player });
    }; 
}

export function Player({ player }) {
    const h1 = document.createElement('h1');
    h1.classList.add('player');

    const playerNameEl = document.createElement('span');
    playerNameEl.classList.add('player-name');
    playerNameEl.textContent = 'Player';

    const playerHpEl = document.createElement('span');
    playerHpEl.classList.add('player-hp');
    playerHpEl.textContent = player.hp;

    const playerFaceEl = document.createElement('span');
    playerFaceEl.classList.add('player-faces');
}