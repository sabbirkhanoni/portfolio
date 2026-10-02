import React from 'react'
import { motion } from 'framer-motion'
import { MdCode, MdLaunch } from 'react-icons/md'
import { FaFolderOpen } from 'react-icons/fa'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "PAI-Mart — AI Ecommerce System with Payment Gateway",
      tagline: "Intelligent Ecommerce & Secure Checkout",
      description: "Full-scale modern ecommerce platform featuring smart product recommendation algorithms, seamless Stripe payment gateway integration, secure JWT auth, and automated transactional emails.",
      image: "/pimart.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Nodemailer", "Tailwind CSS"],
      liveLink: "https://pi-mart.vercel.app",
      githubLink: "https://github.com/sabbirkhanoni/PiMart-An-AI-Integrated-Ecommerce-Application-With-Payment-Gateway"
    },
    {
      id: 2,
      title: "AI-Bot — Embedded SaaS 24/7 Human Assistant AI",
      tagline: "Autonomous Agent & Realtime AI Support",
      description: "Embedded SaaS assistant powered by OpenAI models providing context-aware, human-like automated support, multi-tenant enterprise integration, and automated user inquiry resolution.",
      image: "/pibot.png",
      technologies: ["Next.js", "TypeScript", "Scalekit", "OpenAI API", "Tailwind CSS"],
      liveLink: "https://embedded-human-like-assistant.vercel.app",
      githubLink: "https://github.com/sabbirkhanoni/Embedded-24-7-Human-Like-Assistant-Chatbot"
    },
    {
      id: 3,
      title: "PI-Rides — Real-Time Ride-Sharing Platform with Map Tracking",
      tagline: "Geospatial Matching & Live Telemetry",
      description: "Full-featured ride-hailing architecture featuring live WebSocket map telemetry, intelligent passenger-driver matching, turn-by-turn route calculations, and instant dispatch notifications.",
      image: "/pirides.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Geoapify API", "Express", "JWT"],
      liveLink: "https://pi-rides.vercel.app",
      githubLink: "https://github.com/sabbirkhanoni/PIRides-Ride-Sharing-Platform-with-Realtime-Live-Map-Tracking"
    },
    {
      id: 4,
      title: "Job Board — Enterprise Recruitment Management Platform",
      tagline: "Full-Stack Enterprise ATS Architecture",
      description: "Scalable recruitment ecosystem built with clean NestJS REST architecture, TypeORM relations, real-time Push notification feeds, and applicant tracking pipelines.",
      image: "/jobboard.png",
      technologies: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL", "TypeORM", "Pusher.js", "JWT"],
      liveLink: "https://job-portal-environment.vercel.app",
      githubLink: "https://github.com/sabbirkhanoni/Job-Portal-Application-using-NextJS-RestAPI-NestJS-TypeORM-PostgreeSQL"
    }
  ]

  return (
    <section id='projects' className="relative min-h-screen py-20 px-4 md:px-8 text-white overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-[-150px] w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-150px] w-96 h-96 bg-[#ff8c32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <FaFolderOpen className="text-sm" /> Selected Creations
          </div>
          <h1
            style={{ fontFamily: 'Acorn, sans-serif' }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent"
          >
            Featured Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Production-grade full stack applications, AI assistants, and distributed systems crafted with scalability and precision.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1620]/90 via-[#0a0f14]/90 to-[#121a22]/90 backdrop-blur-xl shadow-2xl hover:border-[rgb(8,165,202)]/50 transition-all duration-500 overflow-hidden relative"
            >
              {/* Subtle hover accent light */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[rgb(8,165,202)]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 md:p-8 relative z-10">
                
                {/* Media Preview Section */}
                <div className={`lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 bg-[#070b0f] group/img relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center p-4">
                    <img 
                      loading="lazy"
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain transform group-hover/img:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[rgb(8,165,202)] uppercase">
                      {project.tagline}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies Tags */}
                    <div className="pt-2">
                      <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-200 hover:border-[rgb(8,165,202)]/50 hover:text-cyan-300 transition duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-400 to-teal-300 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(8,165,202,0.4)] hover:shadow-[0_0_30px_rgba(8,165,202,0.7)] hover:scale-105 transition-all duration-300"
                    >
                      <MdLaunch className="text-base" />
                      <span>Live Preview</span>
                    </a>
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-[rgb(8,165,202)]/60 text-white hover:text-cyan-300 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
                    >
                      <MdCode className="text-lg" />
                      <span>Repository</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project