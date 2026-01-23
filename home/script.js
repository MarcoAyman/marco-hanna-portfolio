document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Interaction Logic for Cards
    const cards = document.querySelectorAll('.card');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
        // DESKTOP: 3D Tilt & Lift Interaction
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -15; 
                const rotateY = ((x - centerX) / centerX) * 15;

                gsap.to(card, {
                    duration: 0.5,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale: 1.03, // Subtle lift
                    transformPerspective: 1000,
                    ease: "power2.out",
                    overwrite: true
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.7,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    ease: "elastic.out(1, 0.3)",
                    overwrite: true
                });
            });

            // Handle card click (opens the internal <a> link)
            card.addEventListener('click', () => {
                const link = card.querySelector('a');
                if (link) link.click();
            });
        });
    } else {
        // MOBILE: Touch Feedback (Scale down on press)
        cards.forEach(card => {
            card.addEventListener('touchstart', () => {
                gsap.to(card, { 
                    scale: 0.98, 
                    duration: 0.1,
                    overwrite: true 
                });
            });

            card.addEventListener('touchend', () => {
                gsap.to(card, { 
                    scale: 1, 
                    duration: 0.3, 
                    ease: "power2.out",
                    overwrite: true 
                });
            });

            // Ensure the click still works on mobile
            card.addEventListener('click', () => {
                const link = card.querySelector('a');
                if (link) link.click();
            });
        });
    }
});
