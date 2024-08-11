document.addEventListener('DOMContentLoaded', (event) => {
    const textArea = document.getElementById("text")
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

const key = 'holamundo';

// Encriptar
function encryptText() {
    const text = document.getElementById("text").value;
    if (!text) return
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    newContent(encrypted)
}

// Desencriptar
function decryptText() {
    const text = document.getElementById("text").value;
    if (!text) return
    const decrypted = CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)

    newContent(decrypted)
}

function newContent(text) {
    const dollDiv = document.querySelector('.doll');
    const rightContainer = document.querySelector('.right-container')

    dollDiv.innerHTML = '';
    const newText = document.createElement('p');
    newText.textContent = text
    newText.style.width = '100%'
    newText.style.overflowWrap = 'break-word';
    newText.style.fontSize = '1.5rem';

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar';
    copyButton.style.width = '100%'
    copyButton.style.height = '67px'
    copyButton.style.background = 'transparent'
    copyButton.style.border = '#0A3871 1px solid'
    copyButton.style.borderRadius = '24px'
    copyButton.addEventListener('click', () => {
        const copyText = newText.textContent
        try {
            // Seleccionar texto
            const range = document.createRange();
            range.selectNode(newText)
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            navigator.clipboard.writeText(copyText)
        } catch (error) {
            alert("Error al copiar el texto.")
        }
    })

    dollDiv.appendChild(newText);
    dollDiv.appendChild(copyButton);

    rightContainer.style.display = 'block';
    rightContainer.style.boxSizing = 'border-box';
    rightContainer.style.padding = '32px';
}