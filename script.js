// ==================== CONFIGURAÇÃO DAS IMAGENS ====================
const IMAGENS = {
    hero: "images/hero-gize.jpg",
    historia: "images/historia-gize.jpg",
    piramide_queops: "images/queops.webp",
    piramide_quefren: "images/quefren.avif",
    piramide_miquerinos: "images/miquerinos.webp",
    esfinge: "images/esfinge.jpg",
    koshari: "images/koshari.jpg",
    falafel: "images/falafel.jpg",
    shawarma: "images/shawarma.jpg",
    baklava: "images/baklava.jpg",
    hotel_luxo: "images/hotel-luxo.jpg",
    hotel_economico: "images/hotel-economico.jpg",
    resort: "images/resort.jpg",
    cta: "images/cta-gize.jpg",
    galeria: [
        "images/galeria-1.jpg",
        "images/galeria-2.jpg",
        "images/galeria-3.jpg",
        "images/galeria-4.jpg",
        "images/galeria-5.jpg",
        "images/galeria-6.jpg"
    ]
};

// ==================== DADOS DOS CARDS ====================
const pontosTuristicos = [
    {
        nome: "Grande Pirâmide de Quéops",
        descricao: "A maior das três pirâmides, construída há mais de 4.500 anos. Uma das Sete Maravilhas do Mundo Antigo ainda em pé.",
        imagem: IMAGENS.piramide_queops
    },
    {
        nome: "Pirâmide de Quéfren",
        descricao: "A segunda maior pirâmide, aparenta ser maior por estar em um terreno mais elevado.",
        imagem: IMAGENS.piramide_quefren
    },
    {
        nome: "Pirâmide de Miquerinos",
        descricao: "A menor das três pirâmides principais, com 65 metros de altura.",
        imagem: IMAGENS.piramide_miquerinos
    },
    {
        nome: "Grande Esfinge",
        descricao: "Monumento com corpo de leão e cabeça humana, guardando o planalto de Gizé há milênios.",
        imagem: IMAGENS.esfinge
    }
];

const gastronomia = [
    {
        nome: "Koshari",
        descricao: "Prato nacional do Egito, mistura de arroz, lentilhas, macarrão e molho de tomate.",
        imagem: IMAGENS.koshari
    },
    {
        nome: "Falafel Egípcio",
        descricao: "Bolinhos de grão-de-bico e ervas, fritos até ficarem crocantes.",
        imagem: IMAGENS.falafel
    },
    {
        nome: "Shawarma",
        descricao: "Carne marinada assada lentamente, servida com pão sírio e vegetais.",
        imagem: IMAGENS.shawarma
    },
    {
        nome: "Baklava",
        descricao: "Sobremesa doce com camadas de massa filo, nozes e mel.",
        imagem: IMAGENS.baklava
    }
];

const eventos = [
    {
        nome: "Festival Cultural Egípcio",
        descricao: "Celebração anual com música tradicional, danças folclóricas e artesanato local.",
        icone: "fas fa-music"
    },
    {
        nome: "Espetáculo de Luzes nas Pirâmides",
        descricao: "Show noturno que conta a história do Egito Antigo com luzes e efeitos especiais.",
        icone: "fas fa-lightbulb"
    },
    {
        nome: "Eventos Turísticos Internacionais",
        descricao: "Feiras e encontros globais para promover o turismo no Egito.",
        icone: "fas fa-globe-americas"
    }
];

const hospedagem = [
    {
        nome: "Hotéis de Luxo",
        descricao: "Experiência 5 estrelas com vista para as pirâmides, spa e gastronomia refinada.",
        preco: "A partir de US$ 300/noite",
        imagem: IMAGENS.hotel_luxo
    },
    {
        nome: "Hotéis Econômicos",
        descricao: "Acomodações confortáveis com bom custo-benefício e localização privilegiada.",
        preco: "A partir de US$ 50/noite",
        imagem: IMAGENS.hotel_economico
    },
    {
        nome: "Resorts",
        descricao: "Complexos completos com piscinas, restaurantes e atividades para toda família.",
        preco: "A partir de US$ 200/noite",
        imagem: IMAGENS.resort
    }
];

const galeriaFotos = [
    { url: IMAGENS.galeria[0], titulo: "Pirâmides de Gizé" },
    { url: IMAGENS.galeria[1], titulo: "Grande Esfinge" },
    { url: IMAGENS.galeria[2], titulo: "Deserto ao Entardecer" },
    { url: IMAGENS.galeria[3], titulo: "Passeio de Camelo" },
    { url: IMAGENS.galeria[4], titulo: "Vista Noturna de Gizé" },
    { url: IMAGENS.galeria[5], titulo: "Interior da Pirâmide" }
];

// ==================== RENDERIZAÇÃO ====================
function renderizarCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = pontosTuristicos.map((item, index) => `
        <div class="card" data-index="${index}">
            <div class="card-img">
                <img src="${item.imagem}" alt="${item.nome}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250?text=Imagem+não+encontrada'">
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.nome}</h3>
                <p class="card-description">${item.descricao}</p>
            </div>
        </div>
    `).join('');
}

function renderizarGastronomia() {
    const gastronomiaGrid = document.getElementById('gastronomiaGrid');
    gastronomiaGrid.innerHTML = gastronomia.map((item, index) => `
        <div class="gastronomia-card" data-index="${index}">
            <div class="gastronomia-img">
                <img src="${item.imagem}" alt="${item.nome}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=Imagem+não+encontrada'">
            </div>
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
        </div>
    `).join('');
}

function renderizarEventos() {
    const eventosContainer = document.getElementById('eventosContainer');
    eventosContainer.innerHTML = eventos.map((item, index) => `
        <div class="evento-card" data-index="${index}">
            <div class="evento-icon">
                <i class="${item.icone}"></i>
            </div>
            <div class="evento-content">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
            </div>
        </div>
    `).join('');
}

function renderizarHospedagem() {
    const hospedagemGrid = document.getElementById('hospedagemGrid');
    hospedagemGrid.innerHTML = hospedagem.map((item, index) => `
        <div class="hospedagem-card" data-index="${index}">
            <div class="hospedagem-img">
                <img src="${item.imagem}" alt="${item.nome}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250?text=Imagem+não+encontrada'">
            </div>
            <div class="hospedagem-content">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <p class="preco">${item.preco}</p>
            </div>
        </div>
    `).join('');
}

function renderizarGaleria() {
    const galeriaGrid = document.getElementById('galeriaGrid');
    galeriaGrid.innerHTML = galeriaFotos.map((foto, index) => `
        <div class="galeria-item" data-index="${index}">
            <img src="${foto.url}" alt="${foto.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Imagem+não+encontrada'">
            <div class="galeria-overlay">
                <p>${foto.titulo}</p>
            </div>
        </div>
    `).join('');
}

// ==================== LIGHTBOX ====================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-lightbox');
    
    document.getElementById('galeriaGrid').addEventListener('click', (e) => {
        const galeriaItem = e.target.closest('.galeria-item');
        if (galeriaItem) {
            const img = galeriaItem.querySelector('img');
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            document.getElementById('caption').innerHTML = img.alt;
        }
    });
    
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// ==================== ANIMAÇÕES ====================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.historia-texto, .historia-imagem, .card, .gastronomia-card, .evento-card, .hospedagem-card, .galeria-item, .mapa-container, .info-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => observer.observe(el));
}

// ==================== NAVBAR ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ==================== SCROLL SUAVE ====================
function initScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== BOTÕES CTA ====================
function initCTAs() {
    const ctaHero = document.getElementById('ctaHeroBtn');
    const ctaFinal = document.getElementById('ctaFinalBtn');
    
    if (ctaHero) {
        ctaHero.addEventListener('click', () => {
            const section = document.querySelector('#pontos-turisticos');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (ctaFinal) {
        ctaFinal.addEventListener('click', () => {
            // >>> COLOQUE SEU NÚMERO DO WHATSAPP AQUI! <<<
            const telefone = "5511999999999";
            const mensagem = "Olá! Vi o site de Gizé e gostaria de mais informações sobre as viagens.";
            const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
            window.open(linkWhatsApp, '_blank');
        });
    }
}

// ==================== FADE-IN ====================
function initFadeIn() {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// ==================== BACKGROUND IMAGES ====================
function updateBackgroundImages() {
    const hero = document.querySelector('.hero');
    if (hero && IMAGENS.hero) {
        hero.style.backgroundImage = `url('${IMAGENS.hero}')`;
    }
    
    const historiaImg = document.querySelector('.historia-imagem img');
    if (historiaImg && IMAGENS.historia) {
        historiaImg.src = IMAGENS.historia;
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    updateBackgroundImages();
    renderizarCards();
    renderizarGastronomia();
    renderizarEventos();
    renderizarHospedagem();
    renderizarGaleria();
    initLightbox();
    initScrollAnimations();
    initNavbar();
    initScrollSuave();
    initBackToTop();
    initCTAs();
    initFadeIn();
});