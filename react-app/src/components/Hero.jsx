import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "ML Researcher",
    "Full-Stack Developer",
    "CS Student",
    "IEEE Published Author",
    "Problem Solver"
  ];

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

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content">
        <p className="hero-greeting reveal">Hello, I'm</p>
        <h1 className="hero-name reveal">Sazibul Islam Siam</h1>
        <p className="hero-tagline reveal">
          <span className="typed-text">{text}</span>
          <span className="cursor-blink">|</span>
        </p>
        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="/Siam-Resume.pdf" className="btn btn-outline" download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
