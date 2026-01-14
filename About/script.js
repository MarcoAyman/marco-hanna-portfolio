document.addEventListener('DOMContentLoaded', () => {
    
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        
        // 1. Animate the Main Card appearing
        gsap.from(".main-card", {
            duration: 1, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out"
        });

        // 2. Animate Profile Elements
        gsap.from(".profile-pic", {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            delay: 0.3,
            ease: "back.out(1.7)" // Adds a slight "bounce" pop effect
        });

        gsap.from(".profile-text", {
            duration: 1,
            x: -30,
            opacity: 0,
            delay: 0.5,
            ease: "power2.out"
        });

        // 3. Stagger Animation for Education Cards
        // They will appear one by one with a 0.2s gap
        gsap.from(".edu-card", {
            scrollTrigger: ".edu-card", // Optional if we added ScrollTrigger plugin
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2, // The delay between each card
            delay: 0.8,
            ease: "power2.out"
        });

        // 4. Stagger Interest Images
        gsap.from(".interest-img", {
            duration: 0.8,
            scale: 0.5,
            opacity: 0,
            stagger: 0.2,
            delay: 1.5,
            ease: "back.out(1.7)"
        });

        console.log("GSAP Animations Loaded");
    } else {
        console.error("GSAP library not found. Check your Internet connection or script tag.");
    }
});