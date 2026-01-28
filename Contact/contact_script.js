function distributeNodes() {
    const nodes = document.querySelectorAll('.item-wrapper');
    const isMobile = window.innerWidth <= 768;
    
    /** * PROFESSIONAL ADJUSTMENT:
     * On mobile, we use a 150px-200px radius.
     * On desktop, we keep your 350px radius.
     */
    const radius = isMobile ? 180 : 350; 
    
    const startAngle = Math.PI * 0.1; // 18 degrees (slight inward tilt)
    const endAngle = Math.PI * 0.9;   // 162 degrees
    const angleStep = (endAngle - startAngle) / (nodes.length - 1);

    nodes.forEach((node, index) => {
        const angle = startAngle + (angleStep * index);

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        node.style.left = `calc(50% + ${x}px)`;
        node.style.top = `calc(50% + ${y}px)`;
    });
}

// Optimized for cross-browser mobile support
window.addEventListener('load', distributeNodes);
window.addEventListener('resize', distributeNodes);
// Handles orientation changes (Portrait to Landscape)
window.addEventListener('orientationchange', () => {
    setTimeout(distributeNodes, 100); 
});
