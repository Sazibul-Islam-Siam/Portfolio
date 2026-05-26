import { useEffect, useRef } from 'react';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stats = entry.target.querySelectorAll('.stat-number');
          stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
              if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current);
                setTimeout(updateCounter, 30);
              } else {
                stat.innerText = target;
              }
            };
            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title reveal">About <span className="accent">Me</span></h2>
        <div className="about-grid">
          <div className="about-image reveal">
            <div className="image-frame">
              <img src="/siam.png" alt="Profile Picture" className="profile-img" />
            </div>
          </div>
          <div className="about-text reveal">
            <p>I'm a <strong>Computer Science student</strong> at International University of Business Agriculture and Technology (IUBAT), Dhaka. My research focuses on <strong>deep learning</strong>, <strong>computer vision</strong>, and <strong>explainable AI</strong> for medical image analysis and agriculture.</p>
            <p>With <strong>4 IEEE publications</strong>, I combine academic research with hands-on software development — building web applications, ML pipelines, and desktop tools. I believe in creating technology that makes a real-world impact.</p>
            <div className="about-stats" ref={statsRef}>
              <div className="stat">
                <span className="stat-number" data-target="4">0</span><span className="stat-suffix"></span>
                <span className="stat-label">IEEE Papers</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-target="3">0</span><span className="stat-suffix">+</span>
                <span className="stat-label">Tech Domains</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
