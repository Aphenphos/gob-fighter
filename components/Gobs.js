
import state, { } from '../state.js';


export default function createGobs(root, { handleAttackGob }) {
    return ({ gobs }) => {
        root.innerHTML = '';

        for (const gob of gobs) {
            const gobEl = Gob({ gob, handleAttackGob });
            root.append(gobEl);
        }
    };
}

export function Gob({ gob, handleAttackGob }) {
    const button = document.createElement('button');
    button.classList.add('gob');

    button.addEventListener('click', () => {
        handleAttackGob(gob);
    });

    const gobNameEl = document.createElement('span');
    gobNameEl.classList.add('gob-name');
    gobNameEl.textContent = gob.name;

    const gobHpEl = document.createElement('span');
    gobHpEl.classList.add('gob-hp');
    gobHpEl.textContent = gob.hp;

    const gobFaceEl = document.createElement('span');
    gobFaceEl.classList.add('gob-faces');
    gobFaceEl.textContent = state.gobFaces[gob.hp];
  
    button.append(gobNameEl, gobFaceEl, gobHpEl);

    return button;
}