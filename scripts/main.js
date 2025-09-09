
    // Botón copiar
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.nextElementSibling.innerText;
        navigator.clipboard.writeText(code);
        btn.textContent = '¡Copiado!';
        setTimeout(() => btn.textContent = 'Copiar', 1500);
      });
    });

 
  