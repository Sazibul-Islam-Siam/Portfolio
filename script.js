/* ═══════════════════════════════════════════════
   Sazibul Islam Siam — Portfolio Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── THEME TOGGLE ───────────────────────────
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // ─── MOBILE NAV ─────────────────────────────
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ─── NAVBAR SCROLL ──────────────────────────
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.section');
    const navItems = navLinks.querySelectorAll('a');

    function onScroll() {
        // Navbar bg
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active section highlighting
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ─── TYPING EFFECT ──────────────────────────
    const phrases = [
        'ML Researcher',
        'Full-Stack Developer',
        'CS Student',
        'IEEE Published Author',
        'Problem Solver'
    ];
    const typedEl = document.getElementById('typed-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeLoop, speed);
    }

    typeLoop();

    // ─── SCROLL REVEAL ──────────────────────────
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // stagger siblings
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.querySelectorAll('.reveal')) : [];
                const i = siblings.indexOf(entry.target);
                const delay = Math.max(0, i) * 100;

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));

    // ─── STAT COUNTER ───────────────────────────
    const stats = document.querySelectorAll('.stat-number');

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                animateCounter(el, target);
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(el => statObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 1500;
        const start = performance.now();

        function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(ease * target);
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    // ─── SKILL BAR ANIMATION ────────────────────
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.setProperty('--level', el.getAttribute('data-level'));
                el.classList.add('animated');
                skillObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(el => skillObserver.observe(el));

    // ─── CONTACT FORM ───────────────────────────
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit span');
        const original = btn.textContent;
        btn.textContent = 'Message Sent!';
        form.reset();
        setTimeout(() => { btn.textContent = original; }, 3000);
    });

});
