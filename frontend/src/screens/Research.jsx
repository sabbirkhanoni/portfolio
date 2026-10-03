'use client';

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
      image: '/reasearch.webp',
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
        image: '/SafeRouteAI.webp',
        impact: "Reduced prediction analysis time by 70% with 99.9% risk mapping fidelity"
      }
    }
  ]

  return (
    <section id='research' className="relative py-8 sm:py-12 md:py-14 text-white overflow-hidden">
      
      {/* Subtle Symmetrical Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[rgb(8,165,202)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest">
            <FaFlask className="text-sm" /> Research & Scientific Innovations
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
            <div 
              key={work.id}
              className="space-y-8"
            >
              {/* Paper Card */}
              <div className="rounded-3xl border border-white/10 bg-[#090e15] p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-[rgb(8,165,202)]/50 transition-colors duration-300">
                
                {/* Top Accent Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Paper Thumbnail & Metrics Column */}
                  <div className="lg:col-span-4 space-y-5">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#060a0f] aspect-[4/3] shadow-lg transform-gpu">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform [backface-visibility:hidden]" 
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {work.status}
                        </span>
                      </div>
                    </div>

                    {/* Research Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      {work.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-[#090f16] border border-cyan-400/25 shadow-[0_0_15px_rgba(8,165,202,0.1)] hover:border-cyan-400/60 transition-all duration-300">
                          <p className="text-xl font-black bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent">{m.value}</p>
                          <p className="text-[9px] text-gray-400 uppercase font-mono font-bold tracking-wider mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Paper Content Column */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-2">
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <FaCalendarAlt /> {work.date}
                        </span>
                        <span>•</span>
                        <span className="text-gray-400 font-medium">Machine Learning & Geospatial Navigation</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug" style={{ fontFamily: 'Acorn, sans-serif' }}>
                        {work.title}
                      </h2>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {work.description}
                    </p>

                    {/* Abstract Box */}
                    <div className="p-4 rounded-2xl bg-[#090f16] border-l-4 border-[rgb(8,165,202)] border border-white/5">
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
                          className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
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
                <div className="relative rounded-3xl border border-teal-500/20 bg-[#090e15] p-6 md:p-10 shadow-2xl overflow-hidden hover:border-teal-400/50 transition duration-300">
                  
                  {/* Top Accent Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent opacity-70" />

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
                    <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-[#060a0f] relative group/img aspect-[16/10] transform-gpu">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={work.webProject.image} 
                        alt={work.webProject.title} 
                        className="w-full h-full object-cover transform-gpu group-hover/img:scale-105 transition-transform duration-300 ease-out will-change-transform [backface-visibility:hidden]" 
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

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research