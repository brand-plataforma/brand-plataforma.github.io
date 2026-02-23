// Efeito de Rolar a Página
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Hambúrguer Interativo
const menuHamburguer = document.getElementById('menuHamburguer');
const nav = document.getElementById('nav');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('ativo');
    nav.classList.toggle('ativo');
});

// Fechar menu ao clicar em um link (mobile)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuHamburguer.classList.contains('ativo')) {
            menuHamburguer.classList.remove('ativo');
            nav.classList.remove('ativo');
        }
    });
});


