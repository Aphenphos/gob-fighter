
export default function createGobs(root, { handleAttackGob }) {
    return ({ gobs }) => {
        root.innerHTML = '';

        for (const gob of gobs) {
            const gobElement = Gob({ gob, handleAttackGob });
            root.append(gobElement);
        }
    };
}

const gobFaces = ['X_x', 'O_O', '(◣_◢)'];

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
    if (gobFaces[gob.hp] === undefined){
        gobFaceEl.textContent = '<>_<>';
    } else {gobFaceEl.textContent = gobFaces[gob.hp];}

    if (gob.hp === 0) {
        gobNameEl.classList.add('dead-gob');

    }
    button.append(gobNameEl, gobFaceEl);

  
    return button;

}