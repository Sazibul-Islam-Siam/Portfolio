const Projects = () => {
  const projects = [
    {
      title: 'Invexis',
      description: 'A comprehensive inventory management system designed for businesses. Features include real-time tracking, analytics dashboard, and automated reporting.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '/invexis.png',
      hue: 260,
      liveUrl: 'https://invexissystem.vercel.app/',
      githubUrl: 'https://github.com/Sazibul-Islam-Siam/Invexis',
      featured: true,
    },
    {
      title: 'Lung Cancer Classification',
      description: 'An explainable hybrid transformer-based lightweight framework to classify lung cancer nodules from CT scans with high accuracy and interpretability.',
      tags: ['PyTorch', 'ViT', 'Grad-CAM', 'Python'],
      image: '/lung-cancer.png',
      hue: 200,
      githubUrl: 'https://github.com/Sazibul-Islam-Siam/Lung-Cancer-Classification',
    },
    {
      title: 'Customer Churn Analysis',
      description: 'Predictive modeling to analyze and forecast customer attrition in the telecommunication sector using ensemble machine learning and XAI techniques.',
      tags: ['Scikit-learn', 'SHAP', 'Pandas', 'Jupyter'],
      image: '/churn.png',
      hue: 340,
      githubUrl: 'https://github.com/Sazibul-Islam-Siam/Customer_Churn_Prediction_using_ML',
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured <span className="accent">Projects</span></h2>
        <p className="section-subtitle reveal">Some things I've built</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card reveal">
              <div className="project-image" style={{ '--hue': project.hue }}>
                {project.featured && (
                  <div className="project-featured-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Featured
                  </div>
                )}
                <img src={project.image} alt={`${project.title} Project`} />
                <div className="project-overlay">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
