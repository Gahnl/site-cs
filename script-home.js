// --- CARROSSEL PRINCIPAL (Banner) ---
const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// --- CARROSSEL DE MEDALHISTAS (Ajustado para centralizar) ---
const swiperMedalhas = new Swiper('.carrossel-medalhas', {
    // Configurações para Mobile (padrão)
    slidesPerView: 1.2,      // Mostra um slide inteiro e 20% dos vizinhos
    centeredSlides: true,   // Mantém o slide ativo exatamente no meio
    spaceBetween: 20,
    loop: true,
    autoplay: { 
        delay: 4000,
        disableOnInteraction: false 
    },
    navigation: {
        nextEl: '.btn-medalha-next',
        prevEl: '.btn-medalha-prev',
    },
    pagination: {
        el: '.pag-medalha',
        clickable: true,
    },
    // Configurações para telas maiores
    breakpoints: {
        768: { 
            slidesPerView: 3,
            centeredSlides: false // No PC, alinha normalmente à esquerda
        }
    }
});

console.log("Site da Escola Objetivo carregado com sucesso!");

// --- LÓGICA DO LIGHTBOX (Zoom nas Fotos) ---
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('img-full');
const lbClose = document.querySelector('.lightbox-close');

// Seleciona todas as fotos da galeria, social e medalhistas
const todasAsFotos = document.querySelectorAll('.photo-item img, .projeto-images img, .card-medalha img');

todasAsFotos.forEach(foto => {
    foto.style.cursor = "zoom-in"; 
    foto.onclick = function() {
        lb.style.display = 'flex';
        lbImg.src = this.src;
    }
});

// Fechar ao clicar no X
if(lbClose) {
    lbClose.onclick = () => {
        lb.style.display = 'none';
    };
}

// Fechar ao clicar fora da imagem
lb.onclick = (e) => {
    if (e.target === lb) {
        lb.style.display = 'none';
    }
};