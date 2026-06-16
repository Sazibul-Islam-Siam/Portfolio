import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.skill-fill');
          fills.forEach((fill, index) => {
            setTimeout(() => {
              fill.style.width = fill.getAttribute('data-level') + '%';
            }, index * 150);
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

  const skills = [
    {
      title: 'ML & AI',
      description: 'PyTorch, TensorFlow, Scikit-learn, Pandas, Jupyter',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a4 4 0 014 4c0 1.1-.45 2.1-1.17 2.83L12 12l-2.83-3.17A4 4 0 0112 2z" />
          <path d="M12 12l2.83 3.17A4 4 0 0112 22a4 4 0 01-1.17-7.83L12 12z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #7c5cfc, #00d4aa)',
    },
    {
      title: 'Frontend',
      description: 'HTML, CSS, JavaScript, React, Next.js',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #00d4aa, #00b4d8)',
    },
    {
      title: 'Backend',
      description: 'Node.js, Python, C#, MySQL, REST APIs',
      level: 78,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #ff6b9d, #c44dff)',
    },
    {
      title: 'Research & Writing',
      description: 'IEEE Publications, LaTeX, Grad-CAM, SHAP, XAI',
      level: 88,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
    {
      title: 'Tools & DevOps',
      description: 'Git, GitHub, Vercel, VS Code, Docker basics',
      level: 82,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    },
    {
      title: 'Data Visualization',
      description: 'Matplotlib, Seaborn, Plotly, Power BI',
      level: 75,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
  ];

  return (
    <section className="section skills" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title reveal">My <span className="accent">Skills</span></h2>
        <p className="section-subtitle reveal">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card reveal">
              <div className="skill-icon-wrapper" style={{ background: skill.gradient }}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-bar-container">
                <div className="skill-bar-label">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-level={skill.level}
                    style={{ width: 0, background: skill.gradient }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
