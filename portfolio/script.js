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

// Text Splitting Logic
const splitTextElements = document.querySelectorAll('.split-text');
splitTextElements.forEach(el => {
    const text = el.innerText;
    el.innerHTML = text.split('').map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
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
.from('.name .char', {
    y: 100,
    opacity: 0,
    rotationX: -90,
    stagger: 0.05,
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
const sections = ['#about', '#skills', '#certificates', '#projects', '#resume', '#contact'];

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

// Certificates Cards staggered fade up
gsap.from('.certificate-card', {
    scrollTrigger: {
        trigger: '#certificates',
        start: "top 70%",
    },
    y: 50,
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.5)"
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
gsap.from('.contact-form-container', {
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

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Name validation
        if (!name.value.trim()) {
            name.parentElement.classList.add('error');
            isValid = false;
        } else {
            name.parentElement.classList.remove('error');
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.parentElement.classList.add('error');
            isValid = false;
        } else {
            email.parentElement.classList.remove('error');
        }
        
        // Message validation
        if (!message.value.trim()) {
            message.parentElement.classList.add('error');
            isValid = false;
        } else {
            message.parentElement.classList.remove('error');
        }
        
        if (isValid) {
            // Simulate form submission
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalText;
                const successMsg = document.getElementById('successMessage');
                successMsg.style.display = 'block';
                setTimeout(() => successMsg.style.display = 'none', 5000);
            }, 1500);
        }
    });
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-xmark');
        });
    });
}

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}
