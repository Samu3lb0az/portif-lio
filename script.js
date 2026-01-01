const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            if (entry.target.id === 'skills') {
                animateSkillCards();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
});

function animateSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card-3x3');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.bg-gradient-blob');
    blobs.forEach((blob, index) => {
        const x = (e.clientX / window.innerWidth) * 50;
        const y = (e.clientY / window.innerHeight) * 50;
        blob.style.transform = `translate(${x * (index + 1) * 0.5}px, ${y * (index + 1) * 0.5}px)`;
    });
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

function preloadImages() {
    const images = [
        'img/foto_perfil2.png',
        'img/write-up.png',
        'img/tech_news.png',
        'img/essenzia.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    document.body.classList.add('loaded');
});