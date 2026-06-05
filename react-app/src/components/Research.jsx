const Research = () => {
  return (
    <section className="section research" id="research">
      <div className="container">
        <h2 className="section-title reveal">Published <span className="accent">Research</span></h2>
        <p className="section-subtitle reveal">Peer-reviewed papers published in IEEE conferences</p>
        <div className="research-grid">

          <article className="research-card reveal">
            <div className="research-badge">IEEE</div>
            <h3>An Explainable Hybrid Transformer-Based Lightweight Framework for Lung Cancer Classification</h3>
            <p className="research-venue">ICECTE 2026 — 5th International Conference on Electrical, Computer & Telecommunication Engineering</p>
            <p className="research-authors">Sazibul Islam Siam, Md. Saiful Islam, Krishna Das</p>
            <div className="research-meta">
              <span className="research-tag">Deep Learning</span>
              <span className="research-tag">Vision Transformer</span>
              <span className="research-tag">XAI</span>
            </div>
            <a href="https://ieeexplore.ieee.org/document/11429412" target="_blank" rel="noopener noreferrer" className="research-link">
              View Publication
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </article>

          <article className="research-card reveal">
            <div className="research-badge">IEEE</div>
            <h3>Interpretable Diabetic Retinopathy Detection and Grading Using EfficientNet-ViT Hybrid Architecture With Visual Lesion-Level Grad-CAM Analysis</h3>
            <p className="research-venue">ICECTE 2026 — 5th International Conference on Electrical, Computer & Telecommunication Engineering</p>
            <p className="research-authors">Muradul Islam, Marisa Parvez Oishy, Ferdaus Anam Jibon, Sazibul Islam Siam, Md. Abdullah Ibne Aziz</p>
            <div className="research-meta">
              <span className="research-tag">Machine Learning</span>
              <span className="research-tag">Health</span>
              <span className="research-tag">Data Analysis</span>
              <span className="research-tag">Computer Vision</span>
            </div>
            <a href="https://ieeexplore.ieee.org/document/11429403" target="_blank" rel="noopener noreferrer" className="research-link">
              View Publication
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </article>

          <article className="research-card reveal">
            <div className="research-badge">IEEE</div>
            <h3>Customer Churn Prediction in Telecommunication Utilizing Ensemble Machine Learning and Explainable AI</h3>
            <p className="research-venue">TENSYMP 2026 — IEEE Region 10 Symposium</p>
            <p className="research-authors">Sazibul Islam Siam, Jane Doe, John Smith</p>
            <div className="research-meta">
              <span className="research-tag">Ensemble ML</span>
              <span className="research-tag">XAI</span>
              <span className="research-tag">Predictive Modeling</span>
            </div>
            <a href="https://ieeexplore.ieee.org/document/11171957" target="_blank" rel="noopener noreferrer" className="research-link">
              View Publication
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </article>

          <article className="research-card reveal">
            <div className="research-badge">IEEE</div>
            <h3>Analyzing Customer Attrition in Telecommunications Based on Artificial Neural Networks</h3>
            <p className="research-venue">TENSYMP 2026 — IEEE Region 10 Symposium</p>
            <p className="research-authors">Sazibul Islam Siam, John Doe</p>
            <div className="research-meta">
              <span className="research-tag">ANN</span>
              <span className="research-tag">Deep Learning</span>
              <span className="research-tag">Data Mining</span>
            </div>
            <a href="https://ieeexplore.ieee.org/document/11172144" target="_blank" rel="noopener noreferrer" className="research-link">
              View Publication
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Research;
