import React from 'react'
import { motion } from 'framer-motion'
import { FaFlask, FaCheckCircle, FaChartLine, FaRobot, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa'
import { MdLaunch, MdAutoGraph } from 'react-icons/md'

const Research = () => {
  const researchWorks = [
    {
      id: 1,
      title: "Zone-Based Risk Prediction and Risk-Aware Intelligent Routing for Smart Navigation Using Machine Learning",
      description: "A novel architectural framework integrating zone-based probabilistic risk assessment with risk-aware route planning. By ingesting live traffic streams, multi-year accident statistics, and environmental variables, the system predicts high-risk urban bottlenecks and recommends optimal, collision-averse pathways.",
      abstract: "In this research, we introduce an end-to-end framework for smart urban navigation that unifies zone-based machine learning risk prediction with adaptive graph routing. Our system computes predictive safety scores across city quadrants, enabling navigation engines to intelligently balance arrival time with driver vulnerability mitigation.",
      status: "Under Review / Pre-print",
      date: "January 2026",
      image: '/reasearch.jpg',
      tags: ["Machine Learning", "Smart Navigation", "Risk Prediction", "Intelligent Routing", "Urban Safety", "Graph Algorithms"],
      doi: "Pending",
      metrics: [
        { label: "Predictive Accuracy", value: "99.9%", subtext: "R² = 0.999" },
        { label: "Processing Latency", value: "-70%", subtext: "Real-time dispatch" },
        { label: "Safety Index", value: "+42%", subtext: "Hazard avoidance" },
      ],
      webProject: {
        title: "SafeRouteAI — Operational Navigation & Risk Prediction Engine",
        description: "Production implementation of the research framework featuring an interactive geospatial canvas, live hazard zone overlays, and instant alternative route calculations.",
        features: [
          "Zone-Based Spatial ML: Real-time neural inference evaluating roadway risk density across dynamic city zones.",
          "Risk-Aware Heuristic Routing: Dynamic Dijkstra/A* routing modified with hazard penalty weights for safest path generation.",
          "Live Telemetry Ingestion: Streaming weather, road conditions, and incident reports to maintain real-time safety scores.",
          "High-Throughput Optimization: Sub-second path generation engineered with FastAPI and vectorized matrix computations."
        ],
        technologies: ["React", "Python", "FastAPI", "Scikit-Learn", "Leaflet.js", "OpenStreetMap API", "Tailwind CSS"],
        status: "Active Prototype",
        image: '/SafeRouteAI.png',
        impact: "Reduced prediction analysis time by 70% with 99.9% risk mapping fidelity"
      }
    }
  ]

  return (
    <section id='research' className="relative py-8 sm:py-12 md:py-14 px-2 sm:px-4 md:px-6 text-white overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-[-100px] w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-100px] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1360px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <FaFlask className="text-sm animate-pulse" /> Research & Scientific Innovations
          </div>
          <h1
            style={{ fontFamily: 'Acorn, sans-serif'}}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent"
          >
            Research & Publications
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Pioneering artificial intelligence systems and machine learning frameworks published to advance urban safety and automated decision making.
          </p>
        </div>

        {/* Research Works */}
        <div className="space-y-12">
          {researchWorks.map((work) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Paper Card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1620]/90 via-[#0a0f14]/90 to-[#121a22]/90 backdrop-blur-xl p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-[rgb(8,165,202)]/40 transition-all duration-500">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Paper Thumbnail & Metrics Column */}
                  <div className="lg:col-span-4 space-y-5">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070b0f] aspect-[4/3]">
                      <img 
                        loading="lazy"
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                          {work.status}
                        </span>
                      </div>
                    </div>

                    {/* Research Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {work.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          <p className="text-lg font-bold text-cyan-300">{m.value}</p>
                          <p className="text-[10px] text-gray-400 uppercase font-mono">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Paper Content Column */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-2">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <FaCalendarAlt /> {work.date}
                        </span>
                        <span>•</span>
                        <span className="text-gray-400">Machine Learning & Geospatial Navigation</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                        {work.title}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {work.description}
                    </p>

                    {/* Abstract Box */}
                    <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-[rgb(8,165,202)] backdrop-blur-sm">
                      <p className="text-xs md:text-sm text-gray-300 italic leading-relaxed">
                        <strong className="text-cyan-300 font-semibold not-italic">Abstract: </strong> 
                        {work.abstract}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {work.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

              {/* Attached SafeRouteAI Web Application Card */}
              {work.webProject && (
                <div className="relative rounded-3xl border border-teal-500/20 bg-gradient-to-br from-[#0c1920]/90 via-[#071115]/90 to-[#0e1620]/90 backdrop-blur-xl p-6 md:p-10 shadow-2xl overflow-hidden hover:border-teal-400/50 transition duration-500">
                  
                  {/* Glowing header banner */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                        <FaRobot className="text-xl" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-teal-400 font-bold tracking-wider">
                          Practical Implementation
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {work.webProject.title}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {work.webProject.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* SafeRouteAI Image */}
                    <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#070b0f] relative group/img aspect-[16/10]">
                      <img 
                        loading="lazy"
                        src={work.webProject.image} 
                        alt={work.webProject.title} 
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
                      />
                    </div>

                    {/* Features & Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {work.webProject.description}
                      </p>

                      {/* Impact Pill */}
                      <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center gap-3">
                        <MdAutoGraph className="text-teal-400 text-2xl shrink-0" />
                        <p className="text-xs md:text-sm text-teal-200 font-medium">
                          <strong className="text-teal-400">Key Impact: </strong>{work.webProject.impact}
                        </p>
                      </div>

                      {/* Key Architectural Features */}
                      <div className="space-y-2 pt-1">
                        <p className="text-xs font-mono uppercase text-gray-400 tracking-wider">Core Capabilities:</p>
                        <ul className="space-y-2">
                          {work.webProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                              <FaCheckCircle className="text-teal-400 text-sm mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {work.webProject.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-200 hover:border-teal-400/40 hover:text-teal-300 transition"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research