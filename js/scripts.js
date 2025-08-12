// Funcionalidade para animações de entrada
document.addEventListener('DOMContentLoaded', function() {
    const elementosParaAnimar = document.querySelectorAll('.animar-entrada');

    elementosParaAnimar.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.animationDelay = `${0.1 * index}s`;
    });

    // Observador de elementos para animação
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    elementosParaAnimar.forEach(elemento => {
        observer.observe(elemento);
    });

    // Ativar link ativo com base na página
    const paginaAtual = window.location.pathname.split('/').pop();
    const linksCabecalho = document.querySelectorAll('.cabecalho__link');

    linksCabecalho.forEach(link => {
        const linkPagina = link.getAttribute('href');
        if (paginaAtual === linkPagina) {
            link.classList.add('cabecalho__link--ativo');
        }
    });
});