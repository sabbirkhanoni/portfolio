'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaCode, FaBuilding, FaCodeBranch } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Techdojo Limited",
      duration: "August 2026 - Present",
      location: "Hybrid (Remote & On-site)",
      type: "Internship",
      isCurrent: true,
      description: "Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Developed an AI integrated application using React, Node.js, MongoDB, Leaflet.js and Gemini API",
        "Implemented performance optimizations that improved application load time",
        "Collaborated with the team to implement features based on requirements"
      ],
      technologies: ["React", "Next.js", "Three.js", "Node.js", "Express.js", "MongoDB", "React Native", "Gemini API", "Git", "GitHub", "JavaScript", "TypeScript", "Tailwind CSS"]
    }
  ]

  return (
    <section id="experience" className="relative py-8 sm:py-12 md:py-14 px-2 sm:px-4 md:px-6 text-white overflow-hidden">
      
      <div className="relative w-full max-w-[1360px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest">
            <FaBriefcase className="text-sm" /> Career & Contributions
          </div>
          <h1 style={{ fontFamily: 'Acorn, sans-serif'}} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent">
            Experience & Journey
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            A timeline of software development milestones, research contributions, and algorithmic problem solving.
          </p>
        </div>

        {/* Centered Premium Experience Card */}
        <div className="w-full mx-auto pt-2">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
            >
              {/* Main Card */}
              <div className="group rounded-3xl border border-white/10 bg-[#0c141d] p-6 md:p-10 shadow-2xl hover:border-[rgb(8,165,202)]/50 transition-colors duration-300 relative overflow-hidden">
                
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[rgb(8,165,202)]/20 transition duration-700" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Accent Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent" />

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6 relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Company Avatar Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(8,165,202)]/20 to-teal-500/10 border border-[rgb(8,165,202)]/30 flex items-center justify-center text-[rgb(8,165,202)] text-2xl shadow-[0_0_20px_rgba(8,165,202,0.25)] shrink-0 mt-1">
                      <FaBuilding />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[rgb(8,165,202)]/15 border border-[rgb(8,165,202)]/35 text-[rgb(8,165,202)] px-3 py-0.5 rounded-full text-xs font-semibold font-mono uppercase tracking-wider">
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-0.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Active Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition duration-300 pt-0.5" style={{ fontFamily: 'Acorn, sans-serif' }}>
                        {exp.role}
                      </h3>
                      <p className="text-[rgb(8,165,202)] font-semibold text-base md:text-lg flex items-center gap-2">
                        <span>{exp.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 text-xs md:text-sm text-gray-400">
                    <span className="flex items-center gap-2 bg-[#060a0f]/80 border border-white/10 px-4 py-2 rounded-xl text-cyan-300 font-mono font-medium shadow-sm">
                      <FaCalendarAlt className="text-[rgb(8,165,202)]" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs font-mono">
                      <FaMapMarkerAlt className="text-teal-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed relative z-10">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6 space-y-3 relative z-10">
                  <h4 className="font-semibold text-white/90 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
                    <FaCodeBranch className="text-[rgb(8,165,202)]" /> Key Engineering Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#070c12]/80 border border-white/5 p-3.5 rounded-2xl hover:border-[rgb(8,165,202)]/30 transition-all duration-300 group/item">
                        <FaCheckCircle className="text-[rgb(8,165,202)] text-base mt-0.5 shrink-0 group-hover/item:text-cyan-300 transition-colors" />
                        <span className="text-xs md:text-sm text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="space-y-2.5 relative z-10 pt-2 border-t border-white/5">
                  <h4 className="font-semibold text-gray-400 text-[11px] font-mono uppercase tracking-wider pt-2">Technologies & Tooling:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white/5 border border-white/10 text-gray-200 px-3 py-1 rounded-xl text-xs font-mono hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Action Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-500 to-teal-400 text-gray-950 font-bold text-sm shadow-[0_0_25px_rgba(8,165,202,0.4)] hover:shadow-[0_0_35px_rgba(8,165,202,0.7)] transition-all duration-300 hover:scale-105"
          >
            <FaDownload className="text-base group-hover:translate-y-0.5 transition duration-300" />
            <span>Download Full Resume / CV</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience