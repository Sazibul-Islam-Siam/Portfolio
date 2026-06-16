import { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '2022',
    title: 'Started CS Journey',
    description: 'Enrolled in Computer Science at IUBAT, Dhaka. Began exploring programming and algorithms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    year: '2024',
    title: 'First IEEE Publications',
    description: 'Published 2 papers at IEEE TENSYMP 2026 on customer churn prediction using ensemble ML and ANN.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    year: '2025',
    title: 'Built Invexis',
    description: 'Developed a full-stack inventory management system with React, Node.js, and MongoDB.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    year: '2026',
    title: '4x IEEE Published',
    description: 'Published 2 more papers at ICECTE 2026 on lung cancer classification and diabetic retinopathy detection with XAI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !lineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const start = Math.max(0, -rect.top + viewportHeight * 0.3);
      const total = rect.height;
      const progress = Math.min(1, Math.max(0, start / total));

      lineRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section timeline-section" id="journey">
      <div className="container">
        <h2 className="section-title reveal">My <span className="accent">Journey</span></h2>
        <p className="section-subtitle reveal">Key milestones in my academic & professional path</p>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill" ref={lineRef}></div>
          </div>

          {milestones.map((item, index) => (
            <div
              key={index}
              className={`timeline-item reveal ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-node">
                <div className="timeline-node-inner">{item.icon}</div>
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
