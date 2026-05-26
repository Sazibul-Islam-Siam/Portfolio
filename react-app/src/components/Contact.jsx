const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title reveal">Get In <span className="accent">Touch</span></h2>
        <p className="section-subtitle reveal">Have a project in mind or want to collaborate?</p>
        <div className="contact-grid">

          <form className="contact-form reveal" id="contact-form" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder=" " required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>

          <div className="contact-info reveal">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>sazibul56593@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13.73 21a2 2 0 01-3.46 0m3.46 0A2 2 0 0012 23a2 2 0 00-1.73-2m3.46 0A2 2 0 0115.46 19M8.54 21A2 2 0 0012 23a2 2 0 003.46-2m-6.92 0A2 2 0 015.08 19" />
                  <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <h4>Socials</h4>
                <div className="social-links">
                  <a href="https://github.com/Sazibul-Islam-Siam" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sazibul-islam-siam/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/sazibul.siam" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
