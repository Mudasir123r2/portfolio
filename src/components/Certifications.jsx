import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 tracking-tight">Certifications</h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto md:mx-0 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const PlatformIcon = cert.platformIcon;
            
            return (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="glass-card p-6 flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden h-full border border-slate-700/50 hover:border-accent-primary/50"
              >
                {/* Top Row: Platform Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-800/80 text-accent-light group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="text-slate-500 group-hover:text-accent-light transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors line-clamp-2 min-h-[56px]">
                  {cert.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 font-mono flex items-center gap-2">
                  <PlatformIcon className="text-lg" />
                  {cert.platform}
                </p>

                {/* Skills */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2 py-1 bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
