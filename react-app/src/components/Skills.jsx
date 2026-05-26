import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.skill-fill');
          fills.forEach(fill => {
            fill.style.width = fill.getAttribute('data-level') + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title reveal">My <span className="accent">Skills</span></h2>
        <p className="section-subtitle reveal">Technologies and tools I work with</p>
        <div className="skills-grid">
          
          <div className="skill-card reveal">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Next.js</p>
            <div className="skill-bar">
              <div className="skill-fill" data-level="85" style={{width: 0}}></div>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3>Backend</h3>
            <p>Node.js, Python, C#, MySQL, REST APIs</p>
            <div className="skill-bar">
              <div className="skill-fill" data-level="78" style={{width: 0}}></div>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3>ML & Data Science</h3>
            <p>PyTorch, TensorFlow, Scikit-learn, Pandas, Jupyter</p>
            <div className="skill-bar">
              <div className="skill-fill" data-level="90" style={{width: 0}}></div>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12A10 10 0 1 1 12 2" />
                <path d="M22 2L12 12" />
                <path d="M16 2h6v6" />
              </svg>
            </div>
            <h3>Tools & Platforms</h3>
            <p>Git, GitHub, Vercel, VS Code, LaTeX</p>
            <div className="skill-bar">
              <div className="skill-fill" data-level="82" style={{width: 0}}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
