document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scroll for Navigation (Kept for functionality)
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

    // 2. Subtle 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate tilt (max 10 degrees for subtlety)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -20; 
            const rotateY = ((x - centerX) / centerX) * 20;

            gsap.to(card, {
                duration: 0.5,
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                ease: "power2.out",
                overwrite: true
            });
        });

        // Reset position when mouse leaves
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.7,
                rotateX: 0,
                rotateY: 0,
                ease: "elastic.out(1, 0.3)",
                overwrite: true
            });
        });
    });
});
