import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  trophy: Trophy,
  award: Award,
  certificate: Medal,
  code: Code,
};

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="section-label reveal">Achievements</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title reveal"
      >
        <span className="gradient-text">Achievements</span>
      </motion.h2>

      <div className="achievements-grid reveal stagger-children">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={['glass-card', 'achievement-card', index === 0 ? 'gold' : ''].filter(Boolean).join(' ')}
              >
                <div className="achievement-icon">
                  <Icon size={22} />
                </div>
                <div>
                  {index === 0 && <div className="achievement-badge">Runner-Up</div>}
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="exp-role">{achievement.event}</div>
                  <div className="achievement-desc">{achievement.description}</div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Achievements;
