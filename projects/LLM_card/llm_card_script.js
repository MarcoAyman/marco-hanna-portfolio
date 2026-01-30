(function() {
    const card = document.querySelector('#project-1');
    if (!card) return;

    // Trigger the blink whenever the mouse enters
    card.addEventListener('mouseenter', () => {
        // Remove the class first to 'reset' the animation if mouse enters quickly
        card.classList.remove('active-blink');
        
        // Trigger a reflow to restart the animation
        void card.offsetWidth; 
        
        card.classList.add('active-blink');
    });

    // Optional: Keep a slight 'hover' glow while inside
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active-blink');
    });
})();