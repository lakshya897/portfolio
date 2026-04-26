import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="gradient-orb orb-1" style={{ top: '10%', left: '-10%' }} />
      <div className="gradient-orb orb-2" style={{ bottom: '20%', right: '-5%' }} />
      <div className="floating-icon">🤖</div>
      <div className="floating-icon">⚡</div>
      <div className="floating-icon">🧠</div>
      <div className="section-label reveal">About</div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-grid"
      >
        <div className="reveal-left">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <img
                src="/animated/avatar-orbit.svg"
                alt="Animated initials avatar"
                className="avatar-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="reveal">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-bio"
          >
            I'm a passionate Software Engineer at TCS specializing in AI/ML, LLM pipelines,
            and full-stack development. With a strong foundation in computer science and hands-on
            experience building intelligent systems, I love solving complex problems through code.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="about-bio"
          >
            Currently working on cutting-edge AI projects involving LangChain, RAG systems,
            and multi-agent architectures. I believe in building systems that not only work
            but think and learn.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="stats-grid reveal stagger-children"
      >
        {portfolioData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="stat-card"
          >
            <span className="stat-number">
              <CountUp end={parseFloat(stat.value)} suffix={stat.value.includes('+') ? '+' : '%'} decimals={0} duration={2} />
            </span>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
