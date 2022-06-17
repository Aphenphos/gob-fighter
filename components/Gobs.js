export const gobFaces = ['X_x', 'O_O', '(◣_◢)', '<>_<>', '<>_<>', '<>_<>', '<>_<>', '<>_<>'];
import { getRandomDamage, } from "../utils.js";

const gobs = [{
    name: 'gobo',
    hp: 5,
}];


export function handleAttackGob(gob) {
    gob.hp -= getRandomDamage();
    console.log(gob.hp);
    playerHP -= getRandomDamage();

    console.log(gob.hp, playerHP);
}


export function gobHandler() {
    for (const gob of gobs) {
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
        console.log(gob);
        if (gobFaces[gob.hp]){
            gobFaceEl.textContent = gobFaces[gob.hp];
        }

        if (gob.hp === 0) {
            gobNameEl.classList.add('dead-gob');
        }
        button.append(gobNameEl, gobFaceEl);
        gobContainer.append(button);

        return button;
    }}