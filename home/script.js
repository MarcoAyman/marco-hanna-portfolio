document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scroll for Navigation
    // This ensures that clicking nav links scrolls smoothly to the section
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

    // 2. Professional 3D Tilt & Interaction Logic
    // Targets all cards (Master, Bachelor, Bosch, Halocline)
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate tilt constants
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // rotateX is based on vertical mouse position
            // rotateY is based on horizontal mouse position
            const rotateX = ((y - centerY) / centerY) * -15; 
            const rotateY = ((x - centerX) / centerX) * 15;

            // Apply 3D Tilt and a subtle "Lift" (scale) to signal clickability
            gsap.to(card, {
                duration: 0.5,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.03, // Subtle zoom-in when hovering
                transformPerspective: 1000,
                ease: "power2.out",
                overwrite: true
            });
        });

        // Reset position and scale when mouse leaves
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.7,
                rotateX: 0,
                rotateY: 0,
                scale: 1, // Reset zoom
                ease: "elastic.out(1, 0.3)", // Professional bouncy reset
                overwrite: true
            });
        });

        // 3. Click Logic for GitHub Redirection
        // Even though we added <a> tags in HTML, this ensures 
        // the entire card area responds to the click professionally.
        card.addEventListener('click', () => {
            const link = card.querySelector('a');
            if (link) {
                // Trigger the click on the internal anchor tag
                link.click();
            }
        });
    });
});
