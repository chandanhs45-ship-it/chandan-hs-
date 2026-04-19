// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    // Basic cursor
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
    });
    
    // Follower cursor with slight delay
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out'
    });
});

// Add hover effect for links and buttons
const hoverElements = document.querySelectorAll('a, .btn, .skill-item, .about-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('active');
    });
});

// Initial Page Load Animations (Hero Section)
const heroTl = gsap.timeline();

heroTl.from('.navbar', {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
})
.from('.greeting', {
    x: -50,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
}, "-=0.5")
.from('.name', {
    y: 50,
    opacity: 0,
    scale: 0.8,
    rotationX: 45,
    duration: 1,
    ease: 'back.out(2)'
}, "-=0.4")
.from('.role', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, "-=0.6")
.from('.bio', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
}, "-=0.6")
.from('.cta-group a', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'back.out(2)'
}, "-=0.4")
.from('.image-wrapper', {
    x: 100,
    rotation: 10,
    opacity: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)'
}, "-=1")
.from('.floating-badge', {
    scale: 0,
    rotation: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'elastic.out(1, 0.4)'
}, "-=0.6");

// Scroll Animations for Sections
const sections = ['#about', '#skills', '#projects', '#resume', '#contact'];

sections.forEach((sec) => {
    gsap.from(`${sec} .section-heading`, {
        scrollTrigger: {
            trigger: sec,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// About Cards staggered fade up
gsap.from('.about-card', {
    scrollTrigger: {
        trigger: '#about',
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Projects Cards staggered fade up
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: "top 70%",
    },
    y: 50,
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)"
});

// Skills stagger
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '#skills',
        start: "top 75%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.5)"
});

// Contact card pop
gsap.from('.contact-card', {
    scrollTrigger: {
        trigger: '#contact',
        start: "top 80%",
    },
    y: 30,
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});
