import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            About Me
          </h2>
        </motion.div>

        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-slate-400 leading-relaxed space-y-6 text-lg max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex gap-4 items-start">
            <span className="text-accent-primary mt-1">▹</span>
            <p>
              I am a <strong className="text-accent-light font-medium">Computer Science graduate</strong> from <strong className="text-white font-medium">Sukkur IBA University (2022-2026)</strong>, passionate about building intelligent, data-driven systems.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-4 items-start">
            <span className="text-accent-primary mt-1">▹</span>
            <p>
              My expertise lies at the intersection of <strong className="text-accent-light font-medium">Machine Learning, Deep Learning, and Full Stack Development</strong>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 items-start">
            <span className="text-accent-primary mt-1">▹</span>
            <p>
              I specialize in creating seamless, end-to-end applications leveraging sophisticated AI models—such as <strong className="text-white font-medium">Large Language Models (LLMs)</strong>, <strong className="text-white font-medium">Natural Language Processing (NLP) pipelines</strong>, and <strong className="text-white font-medium">Computer Vision</strong>—to solve complex real-world problems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 items-start">
            <span className="text-accent-primary mt-1">▹</span>
            <p>
              Currently working as a <strong className="text-accent-light font-medium">freelance developer</strong>, I help global clients integrate powerful AI capabilities (like <strong className="text-white font-medium">RAG pipelines</strong> and <strong className="text-white font-medium">Intelligent Agents</strong>) into modern web platforms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 items-start">
            <span className="text-accent-primary mt-1">▹</span>
            <p>
              My primary focus is on delivering <strong className="text-accent-light font-medium">secure, scalable, and beautifully designed solutions</strong> that drive actual value and performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
