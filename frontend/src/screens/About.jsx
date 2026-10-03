'use client';

import React, { lazy, Suspense } from "react";
import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaServer, FaBrain, FaLayerGroup } from "react-icons/fa";
import Text from "../components/Text";
import { motion } from "framer-motion";
import { Marquee } from "../components/Marquee";
import { Card, CardLabel, Reveal } from "../components/Reveal";
import GitHubContributions from "../components/GitHubContributions";

const Frameworks = lazy(() => import("../components/Frameworks"));

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="relative py-8 sm:py-12 md:py-14 text-white overflow-hidden">
      
      {/* Subtle Symmetrical Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[rgb(8,165,202)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest">
            Profile & Capabilities
          </div>
          <h1 style={{ fontFamily: 'Acorn, sans-serif' }} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Building high-performance applications, algorithmic problem solving, and intelligent ML routing systems.
          </p>
        </div>

        {/* Core Pillars Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group relative p-5 rounded-2xl border border-white/10 bg-[#090e15] hover:border-[rgb(8,165,202)]/50 transition-colors duration-200 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgb(8,165,202)]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[rgb(8,165,202)]/25 transition-all duration-300" />
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-[rgb(8,165,202)]/10 border border-[rgb(8,165,202)]/25 text-[rgb(8,165,202)] text-xl">
                <FaLayerGroup />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[rgb(8,165,202)] bg-[rgb(8,165,202)]/10 px-2 py-0.5 rounded-full border border-[rgb(8,165,202)]/20">
                Core
              </span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Full-Stack Dev</h3>
            <p className="text-xs text-gray-400 mt-1">React, Next.js, Node, Spring</p>
          </div>

          <div className="group relative p-5 rounded-2xl border border-white/10 bg-[#090e15] hover:border-teal-400/50 transition-colors duration-200 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-400/10 rounded-full blur-xl pointer-events-none group-hover:bg-teal-400/25 transition-all duration-300" />
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-teal-400/10 border border-teal-400/25 text-teal-400 text-xl">
                <FaCode />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-full border border-teal-400/20">
                Ranked
              </span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">CP & Algorithms</h3>
            <p className="text-xs text-gray-400 mt-1">Codeforces, LeetCode, GFG</p>
          </div>

          <div className="group relative p-5 rounded-2xl border border-white/10 bg-[#090e15] hover:border-cyan-400/50 transition-colors duration-200 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-400/25 transition-all duration-300" />
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 text-xl">
                <FaBrain />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                Research
              </span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">ML & AI Systems</h3>
            <p className="text-xs text-gray-400 mt-1">Risk Prediction & Intelligent Routing</p>
          </div>

          <div className="group relative p-5 rounded-2xl border border-white/10 bg-[#090e15] hover:border-emerald-400/50 transition-colors duration-200 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-400/25 transition-all duration-300" />
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-xl bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 text-xl">
                <FaServer />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                Infra
              </span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Database & Cloud</h3>
            <p className="text-xs text-gray-400 mt-1">PostgreSQL, MongoDB, Docker</p>
          </div>
        </div>

        {/* Hero Bio Bento Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full rounded-3xl border border-white/10 bg-[#090e15] p-6 md:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Top Accent Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent opacity-70" />

          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            {/* Left Graphic & Quick Metrics */}
            <div className="lg:col-span-4 flex flex-col items-center gap-6">

              {/* Image Frame */}
              <div className="relative group w-full max-w-xs">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-500 to-teal-400 opacity-30 group-hover:opacity-60 transition duration-500 blur-sm" />
                <div className="relative rounded-2xl bg-[#060a0f] border border-white/10 p-4 flex flex-col items-center">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/laptop2.webp"
                    alt="Developer Workspace"
                    className="w-full h-48 object-scale-down transform-gpu group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform [backface-visibility:hidden]"
                  />
                  {/* Status Pill */}
                  <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open to Engineering Roles
                  </div>
                </div>
              </div>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs text-center">
                <div className="p-3 rounded-2xl bg-[#060a0f] border border-[rgb(8,165,202)]/30 shadow-[0_0_15px_rgba(8,165,202,0.15)] hover:border-cyan-400/60 transition duration-300">
                  <p className="text-2xl font-black bg-gradient-to-r from-[rgb(8,165,202)] to-cyan-300 bg-clip-text text-transparent">15+</p>
                  <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mt-0.5">Projects</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#060a0f] border border-teal-500/30 shadow-[0_0_15px_rgba(45,212,191,0.15)] hover:border-teal-400/60 transition duration-300">
                  <p className="text-2xl font-black bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">4+</p>
                  <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mt-0.5">CP Ranks</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#060a0f] border border-cyan-400/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:border-cyan-300/60 transition duration-300">
                  <p className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">99.9%</p>
                  <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mt-0.5">ML Fidelity</p>
                </div>
              </div>

            </div>

            {/* Right Bio Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 style={{ fontFamily: 'Acorn, sans-serif' }} className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                    Hello, I'm <span className="bg-gradient-to-r from-[rgb(8,165,202)] to-cyan-300 bg-clip-text text-transparent">Md. Sabbir Khan Oni</span>
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                    <FaGraduationCap className="text-[rgb(8,165,202)]" /> CSE Student
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                    <FaCode className="text-teal-400" /> Full-Stack & ML Specialist
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-cyan-300" /> Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              {/* Text Paragraph Component */}
              <div className="pt-2">
                <Text />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Marquee Skill Ticker */}
        <Marquee items={["Full-Stack Development", "UI/UX Design", "Machine Learning", "Research", "Open Source", "Web3", "Cloud Architecture", "System Design", "Spring Boot", "React & Next.js"]} />

        {/* GitHub Contributions Showcase (Exact image match) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <GitHubContributions />
        </motion.div>

        {/* Tech Ecosystem & Competitive Programming Bento */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {/* Technologies Orbit Card (Span 1) */}
          <Reveal className="lg:col-span-1" delay={0}>
            <Card
              className="h-full rounded-3xl border border-white/10 bg-[#090e15] shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent opacity-70" />

              <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(8,165,202,0.2) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <CardLabel className="text-lg font-semibold text-white/90">Tech Ecosystem</CardLabel>

                <div className="relative flex-1 flex flex-col items-center justify-center min-h-[260px]">
                  <Suspense fallback={<div className="w-full h-40 rounded-2xl bg-gray-800/50 animate-pulse" />}>
                    <Frameworks />
                  </Suspense>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Competitive Programming Showcase Card (Span 2) */}
          <Reveal className="lg:col-span-2" delay={0}>
            <Card className="rounded-3xl relative overflow-hidden border border-white/10 bg-[#090e15] h-full flex flex-col justify-between shadow-2xl">
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)]/80 to-transparent opacity-70" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(8,165,202,0.12),_transparent_50%)] pointer-events-none" />

              <div className="relative p-6 md:p-8 flex flex-col gap-6">

                <div className="flex items-center justify-between">
                  <CardLabel className="text-lg font-semibold text-white/90 flex items-center gap-2">
                    <FaCode className="text-teal-400 text-xl" /> Competitive Programming Showcase
                  </CardLabel>
                  <span className="text-xs text-teal-400 bg-teal-950/60 border border-teal-800/40 px-3 py-1 rounded-full">
                    Problem Solver
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">

                  {/* Codeforces */}
                  <a
                    href="https://codeforces.com/profile/sabbirkhanoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex justify-center"
                  >
                    <div className="relative w-full rounded-2xl overflow-hidden 
                                    bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-teal-500/30 
                                    p-[1px] transition-all duration-300 group-hover:scale-[1.03]">
                      <div className="rounded-2xl overflow-hidden bg-[#0a0e13]">
                        <img
                          loading="lazy"
                          className="w-full object-cover object-top"
                          src="https://codeforces-readme-stats.vercel.app/api/card?username=sabbir9990&theme=dark"
                          alt="Codeforces Stats"
                        />
                      </div>
                    </div>
                  </a>

                  {/* GeeksforGeeks */}
                  <a
                    href="https://www.geeksforgeeks.org/user/sabbirkhanoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex justify-center"
                  >
                    <div className="rounded-2xl p-[1px] bg-white/10 w-full transition-all duration-300 group-hover:bg-green-500/40 group-hover:scale-[1.03]">
                      <img
                        loading="lazy"
                        className="rounded-2xl shadow-xl w-full bg-[#0a0e13]"
                        src="https://gfgstatscard.vercel.app/sabbirkhanoni?theme=dark"
                        alt="GeeksforGeeks Stats"
                      />
                    </div>
                  </a>

                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/sabbirkhanoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex justify-center"
                  >
                    <div className="rounded-2xl p-[1px] bg-white/10 w-full transition-all duration-300 group-hover:bg-yellow-500/40 group-hover:scale-[1.03]">
                      <img
                        loading="lazy"
                        className="rounded-2xl shadow-xl w-full bg-[#0a0e13]"
                        src="https://leetcard.jacoblin.cool/sabbirkhanoni?theme=dark"
                        alt="LeetCode Stats"
                      />
                    </div>
                  </a>

                </div>
              </div>
            </Card>
          </Reveal>
        </motion.div>

        {/* Tech Stack Pills Marquee */}
        <Marquee items={["HTML5", "CSS3", "JavaScript", "TypeScript", "C++", "Java", "Spring Boot", "ASP.NET Core", "React", "Node.js", "NestJS", "Next.js", "Express", "TypeORM", "Drizzle", "MongoDB", "PostgreSQL", "MySQL"]} />
      </div>
    </section>
  );
};

export default About;