import React from "react";
import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
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
        viewport={{ amount: 0.4 }}
      className="mt-2 space-y-2"
    >
      <p
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className="w-full text-md md:text-sm lg:text-xl px-5 text-gray-700 text-justify text-opacity-90 leading-relaxed"
      >
        I am a Computer Science and Engineering student with a growing
        interest in becoming a Software Engineer. I am currently
        focusing on expanding my skills in Competitive Programming and
        continuously learning to improve my Problem-Solving abilities.

        I am actively honing my skills in software development and continuously
        working to strengthen my technical foundation. I have developed a C#
        (.NET Framework) desktop application using MS SQL Server and a Java
        desktop application using the Swing toolkit with MySQL, demonstrating my
        ability to build user-friendly and functional software interfaces.
      </p>

      <p
        viewport={{ amount: 0.4 }}
        className="w-full text-md px-5 text-gray-700 lg:text-xl text-black text-justify text-opacity-90 leading-relaxed"
      >
        As a dedicated learner, I have a strong desire to broaden my knowledge and
        stay up to date with the latest technologies. I am a versatile team
        player with excellent communication skills, enabling me to collaborate
        effectively in team-oriented environments.
      </p>

      <p
        className="w-full text-md lg:text-xl text-gray-700 px-5 text-black text-justify text-opacity-90 leading-relaxed"
      >
        Currently, I am exploring Web Development and have a growing interest in
        System Design for the future. I am eager to explore the potential of
        these fields and contribute to innovative and impactful projects.

        I am enthusiastic about applying my programming expertise and continuous
        growth mindset to make a meaningful impact as a Software Engineer. I am
        open to new opportunities that allow me to expand my skill set and
        contribute to the advancement of technology.
      </p>
    </motion.div>
  );
};

export default Text;
