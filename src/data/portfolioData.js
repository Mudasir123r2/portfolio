import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaBrain, FaRobot, FaLanguage, FaCogs, FaBalanceScale, FaCamera, FaChartLine, FaMusic, FaHeartbeat, FaCertificate, FaLaptopCode } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiMongodb, SiExpress, SiTypescript, SiKotlin, SiPostgresql, SiDigitalocean, SiOpencv, SiCoursera, SiDatacamp } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import profilePic from '../assets/profile.png';
import lexibotImg from '../assets/lexibot.png';
import visionLlmImg from '../assets/vision_llm.png';
import candleBotImg from '../assets/candle_bot.png';
import drumbeatImg from '../assets/drumbeat.png';
import heartDiseaseImg from '../assets/heart_disease.png';
import nextWordImg from '../assets/next_word.png';
import churnImg from '../assets/churn.png';
export const personalInfo = {
  name: "Mudasir Mujtaba",
  title: "Machine Learning & Full Stack Engineer",
  tagline: "Building intelligent systems and modern web applications with cutting-edge AI and full-stack technologies.",
  email: "mudasirmujtaba15@gmail.com",
  phone: "03112304843",
  linkedin: "https://www.linkedin.com/in/mudasir-mujtaba-660a88360/",
  github: "https://github.com/Mudasir123r2",
  bio: "I am a Computer Science graduate from Sukkur IBA University (2022-2026) with a strong foundation in Machine Learning, Deep Learning, and Full Stack Development. I specialize in building end-to-end applications that integrate sophisticated AI models—such as LLMs, NLP pipelines, and Computer Vision—into robust web and mobile platforms. I am passionate about creating intelligent solutions that solve real-world problems."
};

export const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "Computer Vision", icon: SiOpencv },
      { name: "NLP", icon: FaLanguage },
      { name: "AI Agents", icon: FaBrain },
      { name: "RAG & LLMs", icon: FaRobot }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React JS", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Native", icon: FaReact },
      { name: "Tailwind CSS", icon: null }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node JS", icon: FaNodeJs },
      { name: "Express JS", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Java", icon: FaJava },
      { name: "Kotlin", icon: SiKotlin }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: VscAzure },
      { name: "Digital Ocean", icon: SiDigitalocean },
      { name: "MLOps", icon: FaCogs }
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "BS Computer Science",
    company: "Sukkur IBA University",
    duration: "2022 - 2026",
    description: "Graduated with a CGPA of 3.5. Focused on AI, Data Science, and modern software engineering practices."
  },
  {
    id: 2,
    role: "Freelance AI & Full Stack Developer",
    company: "Fiverr",
    duration: "Present",
    description: "Developing custom AI solutions, RAG pipelines, and LLM integrations for web applications. Building end-to-end full-stack projects for global clients focusing on machine learning, deep learning, and data science."
  },
  {
    id: 3,
    role: "AI Development and Automation Intern",
    company: "Techrypt (Karachi)",
    duration: "June 2025 - August 2025",
    description: "Worked as a backend developer for the Techrypt website. Contributed to a CRM project as a full-stack developer to improve customer data handling. Developed AI Chatbots and utilized automation tools like N8N to solve real-world business challenges."
  }
];

export const projects = [
  {
    id: 1,
    title: "Lexibot - Legal Assistant AI",
    image: lexibotImg,
    description: "A comprehensive platform helping legal professionals manage cases and research documents using cutting-edge AI. Features vector search (FAISS) and LLM inference (Groq/OpenAI).",
    tech: ["React", "FastAPI", "MongoDB", "LangChain", "Groq API"],
    github: "https://github.com/Mudasir123r2/Lexibot-Legal-Assistant-AI-Application.git",
    featured: true
  },
  {
    id: 2,
    title: "Vision LLM",
    image: visionLlmImg,
    description: "Real-time camera analytics pipeline combining computer vision and Large Language Models for industrial security and productivity monitoring. Features YOLO model fine-tuning.",
    tech: ["Python", "YOLO", "LLM", "React", "CV"],
    github: "https://github.com/Mudasir123r2/vision_llm.git",
    featured: false
  },
  {
    id: 3,
    title: "Candle Agent Bot",
    image: candleBotImg,
    description: "Automated cryptocurrency trading bot using candlestick chart data to make trading decisions, featuring Telegram notifications.",
    tech: ["Python", "Trading APIs", "Telegram API", "Data Analysis"],
    github: "https://github.com/Mudasir123r2/candle_bot_project.git",
    featured: false
  },
  {
    id: 4,
    title: "DrumBeat Transcriber",
    image: drumbeatImg,
    description: "Stable, automatic system for transcribing drum audio recordings into readable MIDI files. Features adaptive per-class thresholding and BPM detection.",
    tech: ["Python", "Neural Networks", "Audio Processing", "MIDI"],
    github: "https://github.com/Mudasir123r2/drum-detection.git",
    featured: false
  },
  {
    id: 5,
    title: "Heart Disease Detection",
    image: heartDiseaseImg,
    description: "Machine learning application classifying heart disease risk using decision tree and KNN classification models.",
    tech: ["Machine Learning", "Scikit-Learn", "Python", "Data Science"],
    github: "https://github.com/Mudasir123r2/Heart-Disease-Detection.git",
    featured: false
  },
  {
    id: 6,
    title: "Next Word Predictor",
    image: nextWordImg,
    description: "A deep learning application predicting the next word in a sequence using an LSTM neural network (150 and 100 units) trained on Shakespeare's Hamlet.",
    tech: ["LSTM", "Python", "Streamlit", "Deep Learning", "NLTK"],
    github: "https://github.com/Mudasir123r2/Next-Word-Predictor.git",
    featured: false
  },
  {
    id: 7,
    title: "ANN Classification Churn Prediction",
    image: churnImg,
    description: "Artificial neural network classification model to predict whether a customer will churn or not based on historical data.",
    tech: ["Python", "ANN", "Deep Learning", "Data Science"],
    github: "https://github.com/Mudasir123r2/ANN-Classification-Churn-Prediction.git",
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    title: "MLOps Essentials: Model Development and Integration",
    platform: "LinkedIn Learning",
    platformIcon: FaLinkedin,
    skills: ["AI", "Machine Learning", "MLOps"],
    url: "https://www.linkedin.com/learning/certificates/a1074a2923530c09755352c813c922a5eb30708911c90cec936a9e2e9422021e",
    icon: FaCogs
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep",
    platform: "LinkedIn Learning",
    platformIcon: FaLinkedin,
    skills: ["Amazon Web Services (AWS)"],
    url: "https://www.linkedin.com/learning/certificates/d771980c3909d44bc9b4c5315c3772ea8ee9c33f7d0dbf0fb2b6f8a21f36e8e8",
    icon: FaAws
  },
  {
    id: 3,
    title: "Software Architecture: Patterns for Developers",
    platform: "LinkedIn Learning",
    platformIcon: FaLinkedin,
    skills: ["Software Architectures", "Software Engineering"],
    url: "https://www.linkedin.com/learning/certificates/c6a155f1b03771ab6decc5a6b33233019bf4d9ab0a15b0bcea12f4892d3b685a?trk=share_certificate",
    icon: FaLaptopCode
  },
  {
    id: 4,
    title: "Microsoft Azure Fundamentals (AZ-900) Cert Prep: 1 Cloud Concepts",
    platform: "LinkedIn Learning",
    platformIcon: FaLinkedin,
    skills: ["Cloud Computing", "Microsoft Azure"],
    url: "https://www.linkedin.com/learning/certificates/cb80a049b32f42115f459e9d4eaf428b80cf0c522452878df9ee68b54fbdd272",
    icon: VscAzure
  },
  {
    id: 5,
    title: "Deep Learning and Generative AI: Data Prep, Analysis, and Visualization",
    platform: "LinkedIn Learning",
    platformIcon: FaLinkedin,
    skills: ["Deep Learning", "CNNs", "Generative AI", "NLP", "Computer Vision"],
    url: "https://www.linkedin.com/learning/certificates/5b904ccfac98ccff38f0859dbc14fd97d6553fd2e85627f5c5e4371206a4a69d",
    icon: FaBrain
  },
  {
    id: 6,
    title: "Python for Data Science, AI & Development",
    platform: "Coursera",
    platformIcon: SiCoursera,
    skills: ["Data Science", "AI Development", "Python"],
    url: "https://www.coursera.org/account/accomplishments/verify/P5S43UEM8P9Y",
    icon: FaPython
  },
  {
    id: 7,
    title: "Understanding Machine Learning",
    platform: "DataCamp",
    platformIcon: SiDatacamp,
    skills: ["Supervised ML", "Unsupervised ML", "Regression", "Classification"],
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ffd325e0ae8c039d32c8384c9f70a661c81de455",
    icon: FaRobot
  },
  {
    id: 8,
    title: "Developing Back-End Apps with Node.js and Express",
    platform: "Coursera",
    platformIcon: SiCoursera,
    skills: ["Node.js", "Express.js", "Backend Developer"],
    url: "https://www.coursera.org/account/accomplishments/records/OVHTI06PQS3O",
    icon: FaNodeJs
  },
  {
    id: 9,
    title: "Introduction to MongoDB",
    platform: "MongoDB",
    platformIcon: SiMongodb,
    skills: ["MongoDB Clusters", "Schemas", "Models"],
    url: "https://learn.mongodb.com/c/iAt4M-RTT1evlr51lCEu4g",
    icon: SiMongodb
  }
];
