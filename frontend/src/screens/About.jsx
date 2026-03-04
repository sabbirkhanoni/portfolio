import React, { lazy, Suspense, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Text from "../components/Text";
import { motion } from "framer-motion";
import GradFlow from "gradflow";
import { Marquee } from "../components/Marquee";
import { Card, CardLabel, Reveal } from "../components/Reveal";
import { SocialIcon } from "../components/SocialIcone";

const ParticleBackground = lazy(() =>
  import("../components/ParticleBackground")
);
const Globe = lazy(() => import("../components/Globe"));
const Frameworks = lazy(() => import("../components/Frameworks"));
const TechStack = lazy(() => import("../components/TechStack"));

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


const About = () => {
  const [streakLoaded, setStreakLoaded] = useState(false);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [langsLoaded, setLangsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen p-3 text-white overflow-hidden">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <div className="relative ">
        {/* Content */}
        <div className="text-center mt-5 space-y-4">
          <h1 style={{ fontFamily: 'Acorn, sans-serif'}} className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(81,140,144)] bg-clip-text shimmer-text-heading">
            About Me
          </h1>
          <p className="text-gray-400 text-sm">My professional journey and accomplishments</p>
        </div>

        

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-black"
            >
              {/* Grid Items 1*/}
            <div
              className="flex flex-col h-full overflow-hidden"
            >
              <div className="w-full z-10">
                <img
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  src="/laptop2.png"
                  alt="Laptop"
                  className="object-scale-down w-full h-64"
                />
              </div>

              <div className="relative flex flex-col gap-2 p-2 text-justify z-10">
                <p style={{ fontFamily: 'Acorn, sans-serif' }} className="font-bold mb-3 text-gray-700 pl-5 text-sm md:text-3xl lg:text-3xl">
                  Hello, I'm Md. Sabbir Khan Oni
                </p>
                <div><Text/></div>
              </div>
            </div>
        </motion.div>

        <Marquee items={["Full-Stack Development", "UI/UX Design", "Machine Learning", "Research", "Open Source", "Web3", "Cloud Architecture"]} />

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 my-4"
        >

          {/* GitHub Stats Card */}
          <Reveal className="md:col-span-2 xl:col-span-2" delay={0.1}>
            <Card
              className=" rounded-2xl border border-white/10 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
              }}
            >
              <div className="p-5 flex flex-col gap-6">
                <CardLabel className="text-2xl font-semibold text-gray-200">
                  GitHub Stats & Contributions
                </CardLabel>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  <div className="flex flex-col gap-6 items-center">
                    {!streakLoaded && (
                      <div className="w-full max-w-sm h-[180px] rounded-xl bg-gray-800 animate-pulse" />
                    )}
                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="https://github-readme-streak-stats.herokuapp.com?user=sabbirkhanoni&theme=dark&date_format=M%20j%5B%2C%20Y%5D"
                      alt="GitHub Streak"
                      onLoad={() => setStreakLoaded(true)}
                      style={{ display: streakLoaded ? "block" : "none" }}
                      className="rounded-xl shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300"
                    />

                    {!statsLoaded && (
                      <div className="w-full max-w-sm h-[180px] rounded-xl bg-gray-800 animate-pulse" />
                    )}
                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=radical"
                      alt="GitHub Stats"
                      onLoad={() => setStatsLoaded(true)}
                      style={{ display: statsLoaded ? "block" : "none" }}
                      className="rounded-xl shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex justify-center">
                    {!langsLoaded && (
                      <div className="w-full max-w-sm h-[400px] rounded-xl bg-gray-800 animate-pulse" />
                    )}
                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=sabbirkhanoni&theme=dark&hide_border=false&no-bg=true&no-frame=true&langs_count=10"
                      alt="Top Languages"
                      onLoad={() => setLangsLoaded(true)}
                      style={{ display: langsLoaded ? "block" : "none" }}
                      className="rounded-xl shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                </div>
              </div>
            </Card>
          </Reveal>

          {/* Connect With Me Card */}
          <Reveal className="xl:col-span-1 h-full" delay={0.2}>
            <Card className="h-full" style={{ background: "linear-gradient(160deg, #111827 0%, #0d0d0d 100%)" }}>
              <div className="flex flex-col gap-6 p-2 pl-5 pt-5 h-full">
                <div>
                  <CardLabel>Connect With Me</CardLabel>
                  <div className="flex gap-2 items-center mt-2">
                    <SocialIcon href="https://github.com" icon={<FaGithub />} label="GitHub" />
                    <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
                    <SocialIcon href="mailto:mdsabbirkhanoni@gmail.com" icon={<FaEnvelope />} label="Email" />
                  </div>
                </div>

                <div className="">
                  <Suspense fallback={<div className="w-50 h-50 rounded-full bg-gray-800 animate-pulse" />}>
                    <Globe />
                  </Suspense>
                </div>
              </div>
            </Card>
          </Reveal>

        <Reveal className="xl:col-span-2 h-full" delay={0.3}>
          <Card className="h-full relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f0f0f] to-[#141414] backdrop-blur-xl">

            {/* subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_40%)] pointer-events-none" />

            <div className="relative p-8 h-full flex flex-col gap-8">
              
              <CardLabel className="text-xl font-semibold tracking-wide text-white/90">
                🚀 Competitive Programming Journey
              </CardLabel>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* ================= CODEFORCES (Balanced Height) ================= */}
                <a
                  href="https://codeforces.com/profile/sabbirkhanoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex justify-center"
                >
                  <div className="relative w-full max-w-md rounded-2xl overflow-hidden 
                                  bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 
                                  p-[2px] transition-all duration-500 group-hover:scale-[1.03]">

                    <div className="rounded-2xl overflow-hidden bg-[#0d0d0d]">
                      <img
                        className="w-full object-cover object-top"
                        src="https://codeforces-readme-stats.vercel.app/api/card?username=sabbir9990&theme=dark"
                        alt="Codeforces Stats"
                      />
                    </div>

                  </div>
                </a>

                {/* ================= GFG + LEETCODE ================= */}
                <div className="flex flex-col gap-6 items-center">

                  {/* GFG */}
                  <a
                    href="https://www.geeksforgeeks.org/user/sabbirkhanoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full max-w-sm"
                  >
                    <div className="rounded-2xl p-[2px] bg-white/10 transition-all duration-300 group-hover:bg-green-500/40 group-hover:scale-[1.03]">
                      <img
                        className="rounded-2xl shadow-xl w-full bg-[#0d0d0d]"
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
                    className="group w-full max-w-sm"
                  >
                    <div className="rounded-2xl p-[2px] bg-white/10 transition-all duration-300 group-hover:bg-yellow-500/40 group-hover:scale-[1.03]">
                      <img
                        className="rounded-2xl shadow-xl w-full bg-[#0d0d0d]"
                        src="https://leetcard.jacoblin.cool/sabbirkhanoni?theme=dark"
                        alt="LeetCode Stats"
                      />
                    </div>
                  </a>

                </div>

              </div>
            </div>
          </Card>
        </Reveal>

          {/* Technologies Card */}
          <Reveal className="xl:col-span-1 h-full" delay={0.4}>
            <Card
              className="h-full"
              style={{
                background: "linear-gradient(135deg, #0d0d0d 0%, #0a1a1f 100%)",
                border: "1px solid rgba(8,165,202,0.15)",
              }}
            >
              <div className="p-6 h-full flex flex-col gap-4 relative overflow-hidden">
                {/* Decorative gradient accent */}
                <div
                  className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(8,165,202,0.18) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <CardLabel>Technologies I Work With</CardLabel>

                <div className="relative flex-1 flex flex-col items-center justify-center min-h-[200px]">
                  <Suspense fallback={<div className="w-full h-40 rounded-xl bg-gray-800 animate-pulse" />}>
                    <Frameworks />
                  </Suspense>
                </div>
              </div>
            </Card>
          </Reveal>

        </motion.div>

        <Marquee items={["HTML", "CSS", "JavaScript", "TypeScript","C++","Java","Spring Boot","ASP.NET MVC","ASP.NET Core Web API", "React","Node.js","Nestjs","NextJs","Express","TypeORM","Drizzle","MongoDB","PostgreSQL","MySQL"]} />
      </div>
    </section>
  );
};

export default About;