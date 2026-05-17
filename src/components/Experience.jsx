import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-0">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-accent-primary rounded-full -left-[41px] top-1.5 border-4 border-navy-dark shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              
              <div className="glass-card p-6 md:p-8 hover:border-accent-primary/30 group">
                <h3 className="text-2xl font-bold text-slate-200 mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-accent-light mb-2 font-medium">
                  {exp.company}
                </h4>
                <p className="text-sm font-mono text-slate-500 mb-4">
                  {exp.duration}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
