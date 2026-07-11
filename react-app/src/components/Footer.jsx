const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Wave separator */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <span className="logo-text">Siam</span>
                <span className="logo-dot">.</span>
              </a>
              <p>ML Researcher & Full-Stack Developer crafting intelligent solutions with 4 IEEE publications.</p>
              <div className="footer-social">
                <a href="https://github.com/Sazibul-Islam-Siam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sazibul-islam-siam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/sazibul.siam" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-links-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            {/* CTA column */}
            <div className="footer-cta-col">
              <h4>Let's Work Together</h4>
              <p>Interested in collaboration or have an exciting opportunity? I'd love to hear from you.</p>
              <a href="#contact" className="btn btn-primary btn-small">
                Get In Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} Sazibul Islam Siam. Designed & built with passion.</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
