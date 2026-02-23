// Inicializa todas as galerias
document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const slides = gallery.querySelectorAll('.slide');
        const dots = gallery.querySelectorAll('.control-dot');
        let currentSlide = 0;
        const slideInterval = 5000; // Troca automática a cada 5 segundos

        // Função para mostrar slide selecionado
        const showSlide = (index) => {
            // Remove classe active de todos os slides e dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Atualiza slide atual
            currentSlide = (index + slides.length) % slides.length;
            
            // Adiciona classe active ao slide e dot selecionados
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        // Evento de clique nos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Troca automática de slides
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, slideInterval);
    });
});


