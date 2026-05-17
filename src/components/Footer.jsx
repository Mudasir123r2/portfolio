import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-light transition-colors p-2 hover:bg-slate-800 rounded-full">
            <FaGithub size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-light transition-colors p-2 hover:bg-slate-800 rounded-full">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-accent-light transition-colors p-2 hover:bg-slate-800 rounded-full">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
