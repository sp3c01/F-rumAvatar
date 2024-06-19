document.addEventListener('DOMContentLoaded', function() {
    const contentSections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.getAttribute('id') === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Lógica para exibir conteúdo dos livros ao clicar nos itens
    const bookItems = document.querySelectorAll('.book-item');
    const bookParts = document.querySelectorAll('.book-part');

    bookItems.forEach(item => {
        item.addEventListener('click', function() {
            const part = this.getAttribute('data-part');
            bookParts.forEach(partItem => partItem.classList.remove('active'));
            document.querySelector(`.book-part.part-${part}`).classList.add('active');
        });
    });

    // Lógica da capa do vídeo
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const cover = container.querySelector('.video-cover');

        cover.addEventListener('click', function() {
            cover.style.display = 'none';
            video.play();
        });

        video.addEventListener('play', function() {
            cover.style.display = 'none';
        });

        video.addEventListener('pause', function() {
            cover.style.display = 'block';
        });
    });
});