import React from "react";
import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Text = () => {
  return (
    <motion.div
      variants={paragraphVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg"
    >
      <p className="text-justify text-gray-200">
        I am a <span className="font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-[rgb(8,165,202)] to-teal-400">Computer Science & Engineering</span> student with a relentless drive for building scalable software systems. My core focus lies in solving complex problems through <span className="text-white font-medium">Competitive Programming</span> and crafting robust full-stack applications.
      </p>

      <p className="text-justify text-gray-300">
        I have engineered production-grade desktop and web applications across multiple ecosystems — including <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">C# (.NET)</span>, <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Java Swing</span>, <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">React</span>, <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Node.js</span>, and <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Python ML</span>.
      </p>

      <p className="text-justify text-gray-300">
        Currently, I am expanding my expertise in <span className="text-white font-semibold">Web Development & System Design</span>, building AI-integrated platforms, real-time routing algorithms, and high-concurrency backend services.
      </p>
    </motion.div>
  );
};

export default Text;
