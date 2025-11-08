// ========================================
// PARTICLE EFFECTS & ANIMATIONS
// ========================================

// Create Particle Background
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const container = document.createElement('div');
    container.id = 'particles-container';
    hero.appendChild(container);
    
    // Create 80 particles for a starfield effect
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Random size (small variation)
        const size = Math.random() * 2 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        container.appendChild(particle);
    }
    
    console.log('✨ Particle starfield created');
}

// Parallax Effect on Scroll
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const particles = document.getElementById('particles-container');
        
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Add hover effect to cards
function initCardEffects() {
    const cards = document.querySelectorAll('.trifecta-card, .service-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initParallax();
    initCardEffects();
});
