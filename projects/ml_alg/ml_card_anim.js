const card = document.querySelector('#project-3');

// Create the glow element dynamically
const glow = document.createElement('div');
glow.className = 'card-glow';
card.appendChild(glow);

let mouseX = 0, mouseY = 0; // Actual mouse position
let glowX = 0, glowY = 0;   // Current glow position

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// The Animation Loop (The secret to smoothness)
function animate() {
    // 0.1 is the "softness" factor. Lower = softer/slower.
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    // Center the 300px circle on the mouse
    glow.style.left = `${glowX - 150}px`;
    glow.style.top = `${glowY - 150}px`;

    requestAnimationFrame(animate);
}

animate(); // Start the loop