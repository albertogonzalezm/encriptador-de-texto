const parrafo = document.querySelector(".editable_text")

parrafo.addEventListener('click', () => {
    if (parrafo.innerText === 'Ingrese el texto aqui') {
        parrafo.innerText = '';
    }
});

parrafo.addEventListener('blur', () => {
    if (parrafo.innerText.trim() === '') {
        parrafo.innerText = 'Ingrese el texto aqui';
    }
});
