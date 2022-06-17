
export default function createAddGob(root, { handleAddGob }) {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = new FormData(form);
        handleAddGob(input.get('name'));
        form.reset();
    });

    return () => { };
}