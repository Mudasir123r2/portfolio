import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';
import profilePic from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-light/10 rounded-full mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-accent-light font-mono text-lg mb-4"
          >
            Welcome to my portfolio,
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-slate-400 mb-6"
          >
            I build intelligent systems.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
          >
            I am a <span className="text-accent-light">{personalInfo.title}</span> specializing in integrating sophisticated AI models—such as LLMs and Computer Vision—into robust modern web and mobile platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={800} 
              offset={-80}
              className="cursor-pointer px-8 py-4 bg-accent-primary text-white rounded-md font-medium text-lg hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transform hover:-translate-y-1"
            >
              Check out my work
            </Link>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 rounded-md font-medium text-lg hover:border-accent-light hover:text-accent-light transition-all transform hover:-translate-y-1"
            >
              Visit my GitHub
            </a>
          </motion.div>
        </div>

        {/* Right Side: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card z-10 flex items-center justify-center border-2 border-slate-700 group-hover:border-accent-light transition-colors duration-500 shadow-2xl">
              <img 
                src={profilePic} 
                alt="Mudasir Mujtaba" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-accent-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 text-sm tracking-widest mb-2 font-mono">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
