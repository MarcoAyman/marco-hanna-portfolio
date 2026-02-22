document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('#project-dsai');
    const pills = document.querySelectorAll('.tech-pill-dsai, .github-repo-btn');

    // 1. 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (adjust the 10 or 20 to make it more/less extreme)
        const rotateX = (centerY - y) / 20; 
        const rotateY = (x - centerX) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset position when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        card.style.transition = "transform 0.5s ease";
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "none"; // Remove transition for instant response
    });

    // 2. Sequential "Pop" animation for tech pills
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                pills.forEach((pill, index) => {
                    setTimeout(() => {
                        pill.style.opacity = "1";
                        pill.style.transform = "translateY(0) scale(1)";
                    }, index * 100); // 100ms delay between each pill
                });
            }
        });
    }, observerOptions);

    observer.observe(card);

    // Initial state for pills
    pills.forEach(pill => {
        pill.style.opacity = "0";
        pill.style.transform = "translateY(20px) scale(0.8)";
        pill.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });
});