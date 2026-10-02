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
    <section id="experience" className="relative min-h-screen py-16 px-4 md:px-8 text-white overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <FaBriefcase className="text-sm animate-pulse" /> Career & Contributions
          </div>
          <h1 style={{ fontFamily: 'Acorn, sans-serif'}} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent">
            Experience & Journey
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            A timeline of software development milestones, research contributions, and algorithmic problem solving.
          </p>
        </div>

        {/* Centered Premium Experience Card */}
        <div className="max-w-4xl mx-auto pt-2">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Card */}
              <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1620]/90 via-[#0a0f14]/90 to-[#121a22]/90 backdrop-blur-xl p-6 md:p-10 shadow-2xl hover:border-[rgb(8,165,202)]/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[rgb(8,165,202)]/20 transition duration-500" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6 relative z-10">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[rgb(8,165,202)]/20 border border-[rgb(8,165,202)]/40 text-[rgb(8,165,202)] px-3 py-1 rounded-full text-xs font-semibold">
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Present Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition duration-300 pt-1">
                      {exp.role}
                    </h3>
                    <p className="text-[rgb(8,165,202)] font-semibold text-lg md:text-xl flex items-center gap-2">
                      <FaBuilding className="text-sm text-teal-400" /> {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 text-xs md:text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-gray-200 font-mono">
                      <FaCalendarAlt className="text-[rgb(8,165,202)]" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400">
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
                    <FaCodeBranch className="text-[rgb(8,165,202)]" /> Key Contributions & Impact:
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-gray-300">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/5 p-3.5 rounded-2xl hover:border-white/15 transition duration-200">
                        <FaCheckCircle className="text-[rgb(8,165,202)] text-base mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="space-y-2.5 relative z-10 pt-2">
                  <h4 className="font-semibold text-gray-400 text-xs uppercase tracking-wider">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white/5 border border-white/10 text-gray-200 px-3 py-1 rounded-xl text-xs font-mono hover:text-cyan-300 hover:border-cyan-500/40 transition duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
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