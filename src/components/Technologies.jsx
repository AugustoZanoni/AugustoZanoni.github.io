function Technologies() {
  const techStack = {
    frontend: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Electron'],
    backend: ['C#', '.NET', 'Node.js', 'GraphQL'],
    cloud: ['AWS', 'Azure', 'Docker'],
    specialized: ['WebRTC', 'AI/LLM', 'OpenSearch', 'Xamarin'],
    graphics: ['Three.js']
  }

  return (
    <section className="technologies">
      <div className="technologies-content">
        <h2>Technologies &amp; Expertise</h2>
        
        <div className="tech-categories">
          <div className="tech-category">
            <h3>Frontend Development</h3>
            <div className="tech-grid">
              {techStack.frontend.map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Backend Development</h3>
            <div className="tech-grid">
              {techStack.backend.map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Cloud &amp; DevOps</h3>
            <div className="tech-grid">
              {techStack.cloud.map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Specialized Technologies</h3>
            <div className="tech-grid">
              {techStack.specialized.map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>3D Graphics</h3>
            <div className="tech-grid">
              {techStack.graphics.map((tech) => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
