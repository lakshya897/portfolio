import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const getThumbClass = (index: number) => {
    if (index % 3 === 0) return 'thumb-blue';
    if (index % 3 === 1) return 'thumb-violet';
    return 'thumb-cyan';
  };

  const getProjectImage = (projectName: string) => {
    if (projectName.includes('Som Sahayak')) return '/animated/project-som-sahayak.svg';
    if (projectName.includes('Multi-Agent')) return '/animated/project-multi-agent.svg';
    if (projectName.includes('Agent Skills')) return '/animated/project-rag.svg';
    return '/animated/project-card.svg';
  };

  return (
    <section id="projects" className="section">
      <div className="gradient-orb orb-1" style={{ top: '10%', right: '-10%' }} />
      <div className="gradient-orb orb-3" style={{ bottom: '20%', left: '-8%' }} />
      <div className="floating-icon">🎨</div>
      <div className="floating-icon">📦</div>
      <div className="floating-icon">🔧</div>
      <div className="section-label reveal">Projects</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title reveal"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>
      <p className="section-desc reveal">
        Selected work focused on AI-powered products, automation workflows, and scalable engineering systems.
      </p>

      {/* Featured Project */}
      {portfolioData.projects.filter((p) => p.featured).map((project) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="reveal"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            transition={{ duration: 0.3 }}
            className="glass-card project-card-featured"
          >
            <div className="project-thumbnail thumb-blue">
              <img
                src={getProjectImage(project.name)}
                alt="Animated project preview"
                className="project-thumb-image"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="section-title gradient-text">{project.name}</h3>

              <p className="section-desc">{project.description}</p>

              {project.metrics.map((metric) => (
                <div key={metric} className="project-metric">
                  {metric}
                </div>
              ))}

              <div className="tech-pills">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Other Projects Grid */}
      <div className="projects-grid reveal stagger-children">
        {portfolioData.projects.filter((p) => !p.featured).map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
            >
              <div
                className={['project-thumbnail', getThumbClass(index)].join(' ')}
              >
                <img
                  src={getProjectImage(project.name)}
                  alt="Animated project card preview"
                  className="project-thumb-image"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="exp-company">{project.name}</h3>
                <p className="section-desc">{project.description}</p>

                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric} className="project-metric">
                    {metric}
                  </div>
                ))}

                <div className="tech-pills">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ x: 5 }}
                >
                  <span>View on GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-card">
            <div className="section-title">🚧</div>
            <div className="section-desc">More projects coming soon!</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
