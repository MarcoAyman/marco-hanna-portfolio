/**
 * BOTTOM-REGION SYMMETRICAL DISTRIBUTION
 * Distributes hexagons in an arc below the center hub.
 */

function distributeNodes() {
    const nodes = document.querySelectorAll('.item-wrapper');
    const radius = 350; // Radius from the center hub // INCREASE radius to separate them further from the center hub
    
    // We want to spread the 4 nodes across the bottom arc
    // Start angle: 30 degrees (Math.PI / 6)
    // End angle: 150 degrees (5 * Math.PI / 6)
    // WIDEN the start and end angles to spread them out along the arc
    // 0 is far right, Math.PI (3.14) is far left. 
    const startAngle = Math.PI * 0; // roughly 18 degrees
    const endAngle = Math.PI * 1;   // roughly 162 degrees
    const angleStep = (endAngle - startAngle) / (nodes.length - 1);

    nodes.forEach((node, index) => {
        // Calculate the angle for this specific node in the bottom arc
        const angle = startAngle + (angleStep * index);

        // Calculate X and Y coordinates
        // Using +y because in browser coordinates, Y increases as you go DOWN
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Apply position relative to center of screen
        node.style.left = `calc(50% + ${x}px)`;
        node.style.top = `calc(50% + ${y}px)`;
    });
}

window.addEventListener('load', distributeNodes);
window.addEventListener('resize', distributeNodes);