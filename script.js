// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Create Ambient Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const duration = 4 + Math.random() * 3;
        const delay = Math.random() * 3;
        
        particle.style.animation = `particleFloat ${duration}s ${delay}s infinite ease-in-out`;
        particlesContainer.appendChild(particle);
    }
}

// Particle Float Animation (CSS keyframes defined dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

// Create Leaves
function createLeaves() {
    const leavesContainer = document.getElementById('leavesContainer');
    if (!leavesContainer) return;

    const leavesData = [
        { x: 180, y: 355, rotation: -25, delay: 2.2, scale: 1 },
        { x: 165, y: 345, rotation: 15, delay: 2.4, scale: 0.8 },
        { x: 305, y: 325, rotation: 40, delay: 2.5, scale: 1.1 },
        { x: 320, y: 338, rotation: -15, delay: 2.7, scale: 0.9 },
        { x: 200, y: 260, rotation: 20, delay: 2.8, scale: 0.85 },
        { x: 220, y: 268, rotation: -30, delay: 3.0, scale: 1.05 },
        { x: 235, y: 190, rotation: 10, delay: 3.1, scale: 0.95 },
        { x: 265, y: 185, rotation: -20, delay: 3.3, scale: 0.9 },
    ];

    leavesData.forEach((leaf, i) => {
        const leafDiv = document.createElement('div');
        leafDiv.className = 'leaf';
        leafDiv.style.left = `${leaf.x}px`;
        leafDiv.style.top = `${leaf.y}px`;
        leafDiv.style.setProperty('--rotation', `${leaf.rotation}deg`);
        leafDiv.style.setProperty('--scale', leaf.scale);
        leafDiv.style.animationDelay = `${leaf.delay}s`;

        leafDiv.innerHTML = `
            <svg width="50" height="50" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="leafGradient${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#d946ef;stop-opacity:0.7" />
                        <stop offset="50%" style="stop-color:#c026d3;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#a21caf;stop-opacity:0.9" />
                    </linearGradient>
                </defs>
                <ellipse cx="50" cy="50" rx="22" ry="40" fill="url(#leafGradient${i})" opacity="0.8"/>
                <ellipse cx="50" cy="50" rx="18" ry="35" fill="#e879f9" opacity="0.4"/>
                <line x1="50" y1="15" x2="50" y2="85" stroke="#7e22ce" stroke-width="2" opacity="0.7"/>
                <path d="M 50 30 Q 40 40 50 50" stroke="#7e22ce" stroke-width="1" opacity="0.5" fill="none"/>
                <path d="M 50 50 Q 60 60 50 70" stroke="#7e22ce" stroke-width="1" opacity="0.5" fill="none"/>
            </svg>
        `;

        leavesContainer.appendChild(leafDiv);
    });
}

// Create Sparkles
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    if (!sparklesContainer) return;

    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const angle = (i * Math.PI * 2) / 6;
        const x = 50 + Math.cos(angle) * 70;
        const y = 100 + Math.sin(angle) * 70;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDelay = `${i * 0.5 + 3.5}s`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Create Wisps
function createWisps() {
    const wispsContainer = document.getElementById('wisps');
    if (!wispsContainer) return;

    for (let i = 0; i < 3; i++) {
        const wisp = document.createElement('div');
        wisp.className = 'wisp';
        wisp.style.setProperty('--x-offset', `${(i - 1) * 15}px`);
        wisp.style.animationDelay = `${i * 1 + 3.5}s`;
        
        wispsContainer.appendChild(wisp);
    }
}

// Newsletter Form Handler
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}!`);
        e.target.reset();
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    });
}

// Add to Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        cartCount++;
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Visual feedback
        e.target.textContent = 'Added!';
        e.target.style.background = '#10b981';
        
        setTimeout(() => {
            e.target.textContent = 'Add to Cart';
            e.target.style.background = '#c3026c';
        }, 1000);
    }
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Update active nav link based on current page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createLeaves();
    createSparkles();
    createWisps();
    updateActiveNavLink();
    reveal(); // Initial check for elements in view
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
