const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured <span className="accent">Projects</span></h2>
        <p className="section-subtitle reveal">Some things I've built</p>
        <div className="projects-grid">
          
          <article className="project-card reveal">
            <div className="project-image" style={{"--hue": 260}}>
              <div className="project-overlay">
                <a href="https://invexissystem.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <a href="#" className="project-link" aria-label="GitHub Repository">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>Invexis</h3>
              <p>A comprehensive inventory management system designed for businesses. Features include real-time tracking, analytics dashboard, and automated reporting.</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Tailwind</span>
              </div>
            </div>
          </article>

          <article className="project-card reveal">
            <div className="project-image" style={{"--hue": 200}}>
              <div className="project-overlay">
                <a href="#" className="project-link" aria-label="GitHub Repository">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>Lung Cancer Classification</h3>
              <p>An explainable hybrid transformer-based lightweight framework to classify lung cancer nodules from CT scans with high accuracy and interpretability.</p>
              <div className="project-tags">
                <span>PyTorch</span>
                <span>ViT</span>
                <span>Grad-CAM</span>
                <span>Python</span>
              </div>
            </div>
          </article>

          <article className="project-card reveal">
            <div className="project-image" style={{"--hue": 340}}>
              <div className="project-overlay">
                <a href="#" className="project-link" aria-label="GitHub Repository">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>Customer Churn Analysis</h3>
              <p>Predictive modeling to analyze and forecast customer attrition in the telecommunication sector using ensemble machine learning and XAI techniques.</p>
              <div className="project-tags">
                <span>Scikit-learn</span>
                <span>SHAP</span>
                <span>Pandas</span>
                <span>Jupyter</span>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
