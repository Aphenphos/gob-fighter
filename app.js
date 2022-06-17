
import { getRandomHP, getRandomDamage, } from './utils.js';
import { gobFaces } from './components/Gobs.js';

//player section
var playerHP = 10;
const playerHPDisplay = document.querySelector('#player-hp-display');
playerHPDisplay.textContent = playerHP;



//gob section
const form = document.querySelector('form');


const gobs = [{
    name: 'gobo',
    hp: 5,
}];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = new FormData(form);

    const gobName = input.get('name');

    const newGob = {
        name: gobName,
        hp: getRandomHP()
    };

    gobs.push(newGob);
    gobHandler();
    console.log(newGob);
    console.log(gobs);
    
});

function handleAttackGob(gob) {
    gob.hp -= getRandomDamage();
    console.log(gob.hp);
    playerHP -= getRandomDamage();

    console.log(gob.hp, playerHP);
}



const gobContainer = document.querySelector('#enemy-container');
function gobHandler() {
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
//combat log section

const combatLog = [];

function display() {

}

display();
gobHandler();