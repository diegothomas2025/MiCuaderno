document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll(".code-block");

    codeBlocks.forEach(block => {
        let code = block.textContent; // textContent mantiene el formato y evita errores con HTML previo

        code = code
            // Palabras clave
            .replace(/\b(let|if|else|for|while|const|var|function|return|console)\b/g, '<span class="keyword">$1</span>')
            // Métodos
            .replace(/\b(includes|log|push|pop|map|filter|forEach)\b/g, '<span class="method">$1</span>')
            // Strings
            .replace(/(['"`])(.*?)\1/g, '<span class="string">$&</span>')
            // Números
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

        block.innerHTML = code;
    });
});
