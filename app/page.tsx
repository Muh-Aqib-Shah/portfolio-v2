"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Facebook, 
  Terminal, Globe, Cpu, CloudSun, ArrowUpRight,
  Send, MessageCircle
} from 'lucide-react';
import Lottie from 'lottie-react';
import lottieJson from "./assets/animation.json";
import aboutLottie from "./assets/3.json"

const PerspectiveGrid = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"
      style={{ 
        transform: 'perspective(1000px) rotateX(65deg) translateY(0px) translateZ(-200px)',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
  </div>
);

// --- ANIMATED TEXT ROTATOR ---
const RotatingTitle = () => {
  const titles = ["Full Stack", "AI/ML", "Data"];
  const subtitles = ["Engineer", "Enthusiast", "Analyst"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="block"
        >
          {titles[index]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            {subtitles[index]}
          </span>
        </motion.span>
      </AnimatePresence>
    </h1>
  );
};

export default function PortfolioV3() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "Reactjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "HTML-5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ]
    },
    {
      category: "AI/ML & Data",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ]
    }
  ];

  const projects = [
    {
      title: "xv6 OS + LLaMA2 Integration",
      tag: "Systems Programming",
      desc: "Extended the xv6 kernel by implementing custom math/string libraries and adding a networking interface to integrate a LLaMA2 language model directly into the OS internals.",
      tech: ["C", "x86", "Multithreading", "LLMs"],
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/Muh-Aqib-Shah/OS-Fall25-Project-Init_to_win_It"
    },
    {
      title: "Journeo — Social Trip Planner",
      tag: "Full Stack",
      desc: "A social platform where users create curated travel itineraries, explore shared trips, and interact. Built with a unified Next.js frontend/backend and MySQL.",
      tech: ["Next.js", "TypeScript", "MySQL", "REST APIs"],
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      link: "https://github.com/Muh-Aqib-Shah/journeo"
    },
    {
      title: "Air Quality Forecasting System",
      tag: "AI / ML",
      desc: "72-Hour Hourly AQI Predictions powered by Machine Learning. Includes data preprocessing, model evaluation, and a real-time visualization dashboard.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
      icon: <CloudSun className="w-6 h-6 text-emerald-400" />,
      link: "https://github.com/Muh-Aqib-Shah/AirSense-ML"
    },
    {
      title: "2D Fast Fourier Transform (RISC-V)",
      tag: "Computer Architecture",
      desc: "Implemented a high-performance 2D FFT entirely in RISC-V assembly, leveraging vector extensions for parallel computation and memory optimization.",
      tech: ["RISC-V", "Assembly", "Vector Instructions", "Perf Optimization"],
      icon: <Cpu className="w-6 h-6 text-red-400" />,
      link: "https://github.com/Muh-Aqib-Shah/2-D-FFT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <PerspectiveGrid />

      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white uppercase italic">AQIB SHAH</span>
          <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.3em] uppercase opacity-60 font-bold">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative pt-24 lg:pt-32 pb-12 px-6 max-w-7xl mx-auto min-h-[auto] lg:min-h-[85vh] flex items-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

    {/* LEFT: TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <RotatingTitle />

      <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
        Crafting beautiful, functional web experiences. Specialized in Full Stack
        development, AI/ML solutions, and data analysis.
      </p>

      {/* SOCIALS */}
      <div className="flex gap-6 mb-8">
        <a
          href="https://github.com/Muh-Aqib-Shah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />
        </a>

        <a
          href="https://linkedin.com/in/aqib-shah-io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-400 opacity-40 hover:opacity-100 transition-opacity" />
        </a>

        <a href="mailto:aqibshah1310@gmail.com" aria-label="Email">
          <Mail className="w-5 h-5 text-red-400 opacity-40 hover:opacity-100 transition-opacity" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100008765347390"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-blue-600 opacity-40 hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* CTA BUTTONS */}
      <div className="flex flex-wrap gap-4">
        <a href="#contact">
          <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform uppercase italic">
            Contact Me
          </button>
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1520VZ3r_UQJR75BbSke4OtbX8jZB-fJi"
          download
        >
          <button className="px-8 py-3 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-colors uppercase italic">
            Download Resume
          </button>
        </a>
      </div>
    </motion.div>

    {/* RIGHT: LOTTIE (VISIBLE ON MOBILE) */}
    <div className="flex justify-center items-center relative mt-12 lg:mt-0">
      <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full" />
      {isLoaded && (
        <Lottie
          animationData={lottieJson}
          loop
          className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px]"
        />
      )}
    </div>

  </div>
</section>


      {/* --- NEW: ABOUT SECTION --- */}
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LOTTIE */}
    <div className="order-2 lg:order-1 flex items-center justify-center overflow-hidden mt-12 lg:mt-0 relative">
      <div className="absolute inset-0  rounded-full" />

      {isLoaded && (
        <Lottie
          animationData={aboutLottie}
          loop
          className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px]"
        />
      )}
    </div>

    {/* TEXT */}
    <div className="order-1 lg:order-2">
      <span className="text-[10px] font-mono tracking-[0.4em] text-purple-500 uppercase mb-4 block font-bold">
        About
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight italic uppercase">
        Engineering with Purpose.
      </h2>

      <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
        <p>
          I'm a versatile software engineer with expertise spanning full stack
          development, AI/ML engineering, and data analysis. With over 5 years of
          experience, I blend technical excellence with creative
          problem-solving to deliver impactful solutions.
        </p>

        <p>
          My journey began with curiosity about how technology shapes our world.
          I've since built applications used by thousands, trained machine
          learning models that drive insights, and analyzed data to uncover
          hidden patterns.
        </p>
      </div>
    </div>

  </div>
</section>



      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.5em] text-purple-500 uppercase mb-12 font-bold">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-xl group"
            >
              <h3 className="text-xl font-bold text-white tracking-tight mb-10 pl-2 border-l-2 border-purple-500/50 italic">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-10 gap-x-4">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 group/item">
                    <div className="w-10 h-10 flex items-center justify-center grayscale group-hover/item:grayscale-0 transition-all duration-300 transform group-hover/item:scale-110">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter invert opacity-60 group-hover/item:opacity-100" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-tighter text-slate-500 group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.5em] text-purple-500 uppercase mb-12 font-bold">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} whileHover={{ scale: 1.01 }} className="group relative flex flex-col p-1 rounded-[40px] bg-gradient-to-b from-white/10 to-transparent border border-white/5 overflow-hidden">
              <div className="bg-[#0a0a0a] rounded-[38px] p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl">{project.icon}</div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
                <h4 className="text-[10px] font-mono text-purple-400/60 uppercase tracking-widest mb-2 font-bold italic">{project.tag}</h4>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-medium">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-mono text-slate-500 border border-white/10 font-bold">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-purple-500 uppercase mb-4 block font-bold">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">Let's Create <br /> Together</h2>
            <p className="text-slate-400 max-w-md mb-12 leading-relaxed text-lg font-medium">
              Ready to level up your project? Whether it's a systems-level architecture or a full-stack application, I'm here to help you grow.
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
                <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform"><Mail /></div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Email Me</p>
                  <p className="text-lg font-bold text-white">aqibshah1310@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
                <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform"><MessageCircle /></div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">WhatsApp</p>
                  <p className="text-lg font-bold text-white">+92 3092716728</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 rounded-[48px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 font-bold">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white placeholder:text-slate-600 focus:border-purple-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 font-bold">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white placeholder:text-slate-600 focus:border-purple-500 outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 font-bold">Project Type</label>
                <input type="text" placeholder="Enter project type" className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 font-bold">Message</label>
                <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white placeholder:text-slate-600 focus:border-purple-500 outline-none transition-colors resize-none" />
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity uppercase italic">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-[10px] font-mono text-slate-800 tracking-[0.4em] uppercase font-bold">
          © 2026 Aqib Shah — Specialized in Systems & AI
      </footer>
    </div>
  );
}