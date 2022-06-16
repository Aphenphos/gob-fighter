
export default function createGobs(root, { handleAttackGob }) {
    return ({ gobs }) => {
        root.innerHTML = '';

        for (const gob of gobs) {
            const gobElement = Gob({ gob, handleAttackGob });
            root.append(gobElement);
        }
    };
}

const gobFaces = ['(◣_◢)', 'O_O', 'X_X'];

export function Gob({ gob, handleAttackGob }) {
    const button = document.createElement('button');
    button.classList.add('gob');

    button.addEventListener('click', () => {
        handleAttackGob(gob);
    });

    const gobNameEl = document.createElement('span');
    gobNameEl.classList.add('gob-name');
    gobNameEl.textContent = gob.name;

    const gobFaceEl = document.createElement('span');
    gobFaceEl.classList.add('gob-faces');
    gobFaceEl.textContent = gobFaces[gob.hp];

    button.append(gobNameEl, gobFaceEl);

}