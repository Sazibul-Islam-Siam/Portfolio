

const Research = () => {
  const papers = [
    {
      title: 'An Explainable Hybrid Transformer-Based Lightweight Framework for Lung Cancer Classification',
      venue: 'ICECTE 2026 — 5th International Conference on Electrical, Computer & Telecommunication Engineering',
      authors: 'Sazibul Islam Siam, Md. Saiful Islam, Krishna Das',
      tags: ['Deep Learning', 'Vision Transformer', 'XAI'],
      link: 'https://ieeexplore.ieee.org/document/11429412',
      featured: true,
    },
    {
      title: 'Interpretable Diabetic Retinopathy Detection and Grading Using EfficientNet-ViT Hybrid Architecture With Visual Lesion-Level Grad-CAM Analysis',
      venue: 'ICECTE 2026 — 5th International Conference on Electrical, Computer & Telecommunication Engineering',
      authors: 'Muradul Islam, Marisa Parvez Oishy, Ferdaus Anam Jibon, Sazibul Islam Siam, Md. Abdullah Ibne Aziz',
      tags: ['Machine Learning', 'Health', 'Computer Vision'],
      link: 'https://ieeexplore.ieee.org/document/11429403',
    },
    {
      title: 'Customer Churn Prediction in Telecommunication Utilizing Ensemble Machine Learning and Explainable AI',
      venue: 'TENSYMP 2026 — IEEE Region 10 Symposium',
      authors: 'Sazibul Islam Siam, Jane Doe, John Smith',
      tags: ['Ensemble ML', 'XAI', 'Predictive Modeling'],
      link: 'https://ieeexplore.ieee.org/document/11171957',
    },
    {
      title: 'Analyzing Customer Attrition in Telecommunications Based on Artificial Neural Networks',
      venue: 'TENSYMP 2026 — IEEE Region 10 Symposium',
      authors: 'Sazibul Islam Siam, John Doe',
      tags: ['ANN', 'Deep Learning', 'Data Mining'],
      link: 'https://ieeexplore.ieee.org/document/11172144',
    },
  ];

  return (
    <section className="section research" id="research">
      <div className="container">
        <h2 className="section-title reveal">Published <span className="accent">Research</span></h2>
        <p className="section-subtitle reveal">Peer-reviewed papers published in IEEE conferences</p>
        <div className="research-grid">
          {papers.map((paper, index) => (
            <article key={index} className="research-card reveal">
              <div className="research-card-inner">
                <div className="research-card-header">
                  <div className="research-badge">IEEE</div>
                  {paper.featured && <div className="research-featured-badge">★ Featured</div>}
                </div>
                <h3>{paper.title}</h3>
                <p className="research-venue">{paper.venue}</p>
                <p className="research-authors">{paper.authors}</p>
                <div className="research-meta">
                  {paper.tags.map((tag, i) => (
                    <span key={i} className="research-tag">{tag}</span>
                  ))}
                </div>
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="research-link">
                  View Publication
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
