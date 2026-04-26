import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-label reveal">Experience</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title reveal"
      >
        Work <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="timeline reveal">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="timeline-item"
          >
            <div className="timeline-dot" />

            <div className="glass-card exp-card">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-date">{exp.period}</div>

              <ul className="exp-bullets">
                <li>{exp.description}</li>
              </ul>

              <div className="tech-pills">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {exp.projects && exp.projects.length > 0 && (
                <div>
                  {exp.projects.map((project) => (
                    <div key={project.name} className="sub-project-card">
                      <div className="sub-project-title">{project.name}</div>
                      <div className="section-desc">{project.description}</div>
                      <div className="tech-pills">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="tech-pill">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
