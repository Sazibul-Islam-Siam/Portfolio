import { useState, useEffect, useRef, useCallback } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const roles = [
    "ML Researcher",
    "Full-Stack Developer",
    "IEEE Published Author",
    "Problem Solver"
  ];

  // Staggered entrance
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  // Particle canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let particles = [];
    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get accent color from CSS
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue('--accent').trim() || '#7c5cfc';

      particles.forEach((p, i) => {
        // Mouse interaction — subtle push
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.01;
          p.vx -= dx * force;
          p.vy -= dy * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - cdist / CONNECTION_DISTANCE) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content">
        <div className={`hero-entrance ${loaded ? 'hero-entered' : ''}`}>
          <div className="hero-status-badge" style={{ animationDelay: '0.1s' }}>
            <span className="status-dot"></span>
            Available for opportunities
          </div>
          <p className="hero-greeting" style={{ animationDelay: '0.2s' }}>Hello, I'm</p>
          <h1 className="hero-name" style={{ animationDelay: '0.35s' }}>
            Sazibul Islam Siam
          </h1>
          <p className="hero-tagline" style={{ animationDelay: '0.5s' }}>
            <span className="typed-text">{text}</span>
            <span className="cursor-blink">|</span>
          </p>
          <div className="hero-highlights" style={{ animationDelay: '0.65s' }}>
            <div className="hero-highlight-item">
              <span className="highlight-number">4</span>
              <span className="highlight-label">IEEE Papers</span>
            </div>
            <div className="hero-highlight-divider"></div>
            <div className="hero-highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Tech Domains</span>
            </div>
            <div className="hero-highlight-divider"></div>
            <div className="hero-highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Projects</span>
            </div>
          </div>
          <div className="hero-cta" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View My Work
            </a>
            <a href="/Siam-Resume.pdf" className="btn btn-outline" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
