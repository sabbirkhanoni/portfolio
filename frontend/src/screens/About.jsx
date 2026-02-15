import React, { lazy, Suspense, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Text from "../components/Text";
import { motion } from "framer-motion";
import GradFlow from "gradflow";

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
          <h1 style={{ fontFamily: 'Acorn, sans-serif'}} className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
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

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 px-6 md:grid-cols-6 gap-3 md:auto-rows-[21rem] rounded-md overflow-hidden mt-2"
        >
          {/* Grid Items 2 */}
          <div
            className="flex flex-col text-center rounded-2xl bg-gradient-to-r from-gray-800 to-[rgb(13,13,13)] grid-2 p-4"
          >
            <div className="w-full text-center mb-1">
              <p className="text-md opacity-70 font-semibold text-white">
                GitHub Stats & Contributions
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col lg:flex-row md:flex-col gap-10 my-2">
                <div className="flex flex-col md:flex-row lg:flex-col gap-3 justify-center items-center">
                  <div className="w-72">
                    {!streakLoaded && (
                      <div className="w-full h-30 rounded-lg bg-gray-700 animate-pulse" />
                    )}

                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="https://github-readme-streak-stats.herokuapp.com?user=sabbirkhanoni&theme=dark&date_format=M%20j%5B%2C%20Y%5D"
                      alt="GitHub Streak"
                      onLoad={() => setStreakLoaded(true)}
                      className={`transition-opacity duration-500 ${
                        streakLoaded ? "opacity-100" : "opacity-0 absolute"
                      }`}
                    />
                  </div>

                  <div className="w-72">
                    {!statsLoaded && (
                      <div className="w-full h-30 rounded-lg bg-gray-700 animate-pulse" />
                    )}

                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="https://github-readme-stats.vercel.app/api?username=sabbirkhanoni&theme=dark&show_icons=true&hide_border=false&count_private=true&include_all_commits=true"
                      alt="GitHub Stats"
                      onLoad={() => setStatsLoaded(true)}
                      className={`transition-opacity duration-500 ${
                        statsLoaded ? "opacity-100" : "opacity-0 absolute"
                      }`}
                    />
                  </div>
                </div>

                <div className="w-60">
                  {!langsLoaded && (
                    <div className="w-full h-35 rounded-lg bg-gray-700 animate-pulse" />
                  )}

                  <img
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=sabbirkhanoni&amp;theme=dark&amp;hide_border=false&amp;no-bg=true&amp;no-frame=true&amp;langs_count=10"
                    alt="Top Languages"
                    onLoad={() => setLangsLoaded(true)}
                    className={`transition-opacity h-65 duration-500 ${
                      langsLoaded ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid Items 3 */}
          <div className="flex flex-col bg-[rgb(13,13,13)] grid-2 rounded-xl p-4">
            <div className="w-full text-center mb-2">
              <p className="text-md opacity-70 font-semibold text-white">
                Competitive Programming Journey
              </p>
            </div>

            {/* Stats cards below */}
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">

                {/* Column 1: Codeforces */}
                <div className="flex justify-center">
                  <a
                    href="https://codeforces.com/profile/sabbirkhanoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-75 h-auto rounded-lg shadow-xl"
                      src="https://codeforces-readme-stats.vercel.app/api/card?username=sabbir9990&theme=dark"
                      alt="Codeforces Stats"
                    />
                  </a>
                </div>

                {/* Column 2: GFG + LeetCode stacked */}
                <div className="flex flex-col gap-2 justify-center">

                  {/* GFG */}
                  <a
                    href="https://www.geeksforgeeks.org/user/sabbirkhanoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-55 h-auto rounded-lg shadow-xl"
                      src="https://gfgstatscard.vercel.app/sabbirkhanoni?theme=dark"
                      alt="GeeksforGeeks Stats"
                    />
                  </a>

                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/sabbirkhanoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-55 h-auto rounded-lg shadow-xl"
                      src="https://leetcard.jacoblin.cool/sabbirkhanoni?theme=dark"
                      alt="LeetCode Stats"
                    />
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* Grid Items 4 */}
          <div
            initial="hidden"
            whileinview="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex items-center grid-special-color grid-4"
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-md mt-2 opacity-70">Connect With Me:</h1>
              <div className="flex gap-2">
                <a href="#" target="_blank">
                  <FaGithub className="h-6 w-6" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                {/* Gmail */}
                <a href="mailto:your-email@gmail.com" target="_blank">
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
                <Suspense
                fallback={<div className="w-64 h-64 rounded-full bg-gray-800" />}
              >
                <Globe className="w-64 h-64" />
              </Suspense>
            </div>
          </div>

          {/* Grid Items 5 */}
          <div
            className=" absolute rounded-2xl flex flex-col items-center bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] grid-5 gap-4"
          >
            <h3 className="font-bold opacity-70 text-md mt-2">Technologies I Work With</h3>
            <div className="relative flex flex-col items-center">
              <div className="absolute opacity-30 z-0">
                <Suspense fallback={null}>
                <div className="absolute opacity-30">
                  <Frameworks />
                </div>
              </Suspense>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10">
                <Suspense fallback={null}>
                  <TechStack />
                </Suspense>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;