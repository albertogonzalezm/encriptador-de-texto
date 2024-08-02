document.addEventListener('DOMContentLoaded', (event) => {
    const textArea = document.querySelector('.text-area');
    const maxHeight = parseInt(window.getComputedStyle(textArea).maxHeight);

    textArea.addEventListener('input', autoResize, false);

    function autoResize() {
        if (this.scrollHeight > maxHeight) {
            this.value = this.value.slice(0, -1); // Eliminar el último caracter
        } else {
            this.style.height = 'auto'; // Resetear la altura
            this.style.height = this.scrollHeight + 'px'; // Ajustar a la altura del contenido
        }
    }
});