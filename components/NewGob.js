
export default function createNewGob(root, { handleNewGob }) {
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleNewGob(formData.get('name'));
    });

    return () => { };
}