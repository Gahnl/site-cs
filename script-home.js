// Inicialização do Carrossel Swiper
const swiper = new Swiper('.mySwiper', {
    // Ciclo infinito
    loop: true,
    
    // Troca automática a cada 5 segundos
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Pontinhos de navegação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Setas laterais
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

console.log("Site da Escola Objetivo carregado com sucesso!");
// Inicialização do novo carrossel de medalhistas
const swiperMedalhas = new Swiper('.carrossel-medalhas', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000 },
    navigation: {
        nextEl: '.btn-medalha-next',
        prevEl: '.btn-medalha-prev',
    },
    pagination: {
        el: '.pag-medalha',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 3 } // Mostra 3 cards no PC
    }
});
// --- Lógica do Zoom nas Fotos ---
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('img-full');
const lbClose = document.querySelector('.lightbox-close');

// Seleciona todas as fotos da galeria, social e medalhistas
const todasAsFotos = document.querySelectorAll('.photo-item img, .projeto-images img, .card-medalha img');

todasAsFotos.forEach(foto => {
    foto.style.cursor = "zoom-in"; // Muda o mouse para uma lupinha
    foto.onclick = function() {
        lb.style.display = 'flex';
        lbImg.src = this.src;
    }
});

// Fechar ao clicar no X
lbClose.onclick = () => {
    lb.style.display = 'none';
};

// Fechar ao clicar fora da imagem
lb.onclick = (e) => {
    if (e.target === lb) {
        lb.style.display = 'none';
    }
};