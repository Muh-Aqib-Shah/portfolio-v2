"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Facebook, Code2, BrainCircuit, 
  BarChart3, ChevronRight, Terminal, Globe, Cpu, CloudSun, ArrowUpRight 
} from 'lucide-react';
import Lottie from "lottie-react";

// --- PERSPECTIVE GRID COMPONENT ---
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

export default function PortfolioV3() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "xv6 OS + LLaMA2 Integration",
      tag: "Systems Programming",
      desc: "Extended the xv6 kernel by implementing custom math/string libraries and adding a networking interface to integrate a LLaMA2 language model directly into the OS internals.",
      tech: ["C", "x86", "Multithreading", "LLMs"],
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Journeo — Social Trip Planner",
      tag: "Full Stack",
      desc: "A social platform where users create curated travel itineraries, explore shared trips, and interact. Built with a unified Next.js frontend/backend and MySQL.",
      tech: ["Next.js", "TypeScript", "MySQL", "REST APIs"],
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Air Quality Forecasting System",
      tag: "AI / ML",
      desc: "72-Hour Hourly AQI Predictions powered by Machine Learning. Includes data preprocessing, model evaluation, and a real-time visualization dashboard.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
      icon: <CloudSun className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "2D Fast Fourier Transform (RISC-V)",
      tag: "Computer Architecture",
      desc: "Implemented a high-performance 2D FFT entirely in RISC-V assembly, leveraging vector extensions for parallel computation and memory optimization.",
      tech: ["RISC-V", "Assembly", "Vector Instructions", "Perf Optimization"],
      icon: <Cpu className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <PerspectiveGrid />

      {/* --- REWORKED NAV --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">AQIB SHAH</span>
          <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#links" className="hover:text-purple-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION: Fixed Nav Overlap --- */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
              AI/ML <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Engineer|
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              Crafting beautiful, functional web experiences. Specialized in Full Stack development, AI/ML solutions, and data analysis.
            </p>
            
            <div className="flex gap-6 mb-12">
              <Github className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer text-blue-400 transition-opacity" />
              <Mail className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer text-red-400 transition-opacity" />
              <Facebook className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer text-blue-600 transition-opacity" />
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                CONTACT ME
              </button>
              <button className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-colors">
                DOWNLOAD RESUME
              </button>
            </div>
          </motion.div>

          {/* Lottie Container with Fixed Display */}
          <div className="hidden lg:flex justify-center items-center relative aspect-square">
            <div className="absolute inset-0 bg-purple-500/10 blur-[120px] rounded-full" />
            {isLoaded && (
              <div className="w-full h-full max-w-[450px] relative z-10">
                <Lottie 
                  animationData={null} 
                  path="https://lottie.host/6134a6e0-2475-4c07-8e65-985287c8d9df/R3NqG3A5S5.json" 
                  loop={true} 
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Full Stack Engineering", icon: <Code2 />, desc: "Building end-to-end web applications with React, Next.js, and Node.js. Focused on robust architectures." },
            { title: "AI/ML Engineering", icon: <BrainCircuit />, desc: "Developing intelligent systems and deep learning models that learn and adapt to real-world problems." },
            { title: "Data Analysis", icon: <BarChart3 />, desc: "Transforming raw data into actionable insights using Python and SQL to drive informed decisions." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl"
            >
              <div className="text-purple-400 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ALL 4 PROJECTS --- */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.5em] text-purple-500 uppercase mb-16">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col p-1 rounded-[40px] bg-gradient-to-b from-white/10 to-transparent border border-white/5 overflow-hidden"
            >
              <div className="bg-[#0a0a0a] rounded-[38px] p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl">{project.icon}</div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">{project.tag}</h4>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-slate-500 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- REWORKED CONNECT SECTION --- */}
      <footer id="links" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="relative p-12 md:p-24 rounded-[60px] bg-white/[0.02] border border-white/5 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
              READY TO <br /> <span className="text-white/20">COLLABORATE?</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-12">
              Currently open to Full Stack and AI/ML opportunities. Let's build something exceptional.
            </p>
            <a 
              href="mailto:aqibshah1310@gmail.com" 
              className="inline-block text-2xl md:text-4xl font-bold text-purple-400 hover:text-white transition-colors underline underline-offset-8"
            >
              aqibshah1310@gmail.com
            </a>
            
            <div className="flex justify-center gap-10 mt-20">
              {['GITHUB', 'LINKEDIN', 'TWITTER'].map(link => (
                <span key={link} className="text-[10px] font-mono tracking-[0.4em] text-slate-600 hover:text-white cursor-pointer transition-colors">
                  {link}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-20 text-center text-[10px] font-mono text-slate-800 tracking-widest uppercase">
          © 2026 Aqib Shah — Specialized in Systems & AI
        </div>
      </footer>
    </div>
  );
}