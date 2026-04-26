import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-label reveal">Education</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title reveal"
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="reveal"
      >
        <div className="glass-card">
          <div className="achievement-icon">
            <GraduationCap size={28} />
          </div>

          <div>
            <div className="exp-company">{portfolioData.education.university}</div>
            <div className="exp-role">{portfolioData.education.degree}</div>
            <div className="exp-date">{portfolioData.education.period}</div>
            <div className="project-metric">
              CGPA
              <strong>{portfolioData.education.cgpa}</strong>
            </div>

            <div className="section-desc">Relevant Coursework</div>
            <div className="tech-pills">
              {portfolioData.education.coursework.map((course) => (
                <span key={course} className="tech-pill">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
