import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [orbitRadius, setOrbitRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) {
        setOrbitRadius(80);
      } else if (window.innerWidth < 768) {
        setOrbitRadius(100);
      } else {
        setOrbitRadius(120);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const getVariantClass = (categoryName: string) => {
    if (categoryName === 'AI/LLM') return 'ai';
    if (categoryName === 'Languages') return 'lang';
    if (categoryName === 'Cloud & Tools') return 'cloud';
    return '';
  };

  const skillCategories = [
    { name: 'AI/LLM', skills: portfolioData.skills.ai_llm },
    { name: 'Languages', skills: portfolioData.skills.languages },
    { name: 'Frameworks', skills: portfolioData.skills.frameworks },
    { name: 'Databases', skills: portfolioData.skills.databases },
    { name: 'ML/DL', skills: portfolioData.skills.ml_dl },
    { name: 'Cloud & Tools', skills: portfolioData.skills.cloud_tools },
  ];

  return (
    <section id="skills" className="section">
      <div className="gradient-orb orb-2" style={{ top: '5%', right: '-8%' }} />
      <div className="gradient-orb orb-3" style={{ bottom: '15%', left: '-5%' }} />
      <div className="floating-icon">🔮</div>
      <div className="floating-icon">🚀</div>
      <div className="floating-icon">💻</div>
      <div className="section-label reveal">Skills</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title reveal"
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <p className="section-desc reveal">
        A practical toolkit across AI engineering, modern web development, and production-ready cloud tooling.
      </p>

      <div className="skills-layout">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="globe-wrapper reveal"
        >
          <div className="glass-card">
            <div className="section-title gradient-text">Skills</div>
            <div className="section-desc">Tech Stack</div>
          </div>

          {['Python', 'React', 'TensorFlow', 'Node.js', 'LangChain'].map((tech, i) => (
            <motion.div
              key={tech}
              className="orbit-item"
              animate={{
                x: Math.cos((i * 2 * Math.PI) / 5) * orbitRadius,
                y: Math.sin((i * 2 * Math.PI) / 5) * orbitRadius,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            >
              {tech.substring(0, 2)}
            </motion.div>
          ))}
        </motion.div>

        <div className="reveal">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-category"
            >
              <div className="skill-category-title">{category.name}</div>
              <div className="skill-chips">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={['skill-chip', getVariantClass(category.name)].filter(Boolean).join(' ')}
                    whileHover={{ scale: 1.03 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
