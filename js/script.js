// Navegação suave com compensação da altura da navbar
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Validação do formulário de contato e simulação de envio
(() => {
    const form = document.querySelector('#contatoForm');
    const mensagem = document.querySelector('#formMensagem');

    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        } else {
            event.preventDefault(); // Simula envio sem backend
            form.classList.remove('was-validated');
            form.reset();
            mensagem.classList.remove('d-none');
            setTimeout(() => mensagem.classList.add('d-none'), 4000); // Esconde após 4 segundos
        }
    });
})();
