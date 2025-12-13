import React from "react";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
  return (
    <section className="relative min-h-screen mt-5 p-3 overflow-hidden text-white bg-gray-900">
      
      <ParticleBackground />

      <div className="relative z-0">

      {/* Content */}
      <h2 className="font-bold text-xl text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:auto-rows-[18rem] rounded-md overflow-hidden mt-5">
        
        <div className="flex flex-col items-end grid-1">
          <div className="w-full h-2/3">
            <img
              src="/laptop1.jpg"
              alt="Laptop"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-3 p-4 text-justify">
            <p className="font-bold text-2xl">
              Hello, I'm Md. Sabbir Khan Oni
            </p>
            <p>
              I am a Computer Science and Engineering student with a growing
              interest in becoming a Software Engineer. I am currently focusing
              on expanding my skills in Competitive Programming and continuously
              learning to improve my Problem-Solving abilities.
            </p>
          </div>
        </div>

        <div className="flex items-end grid-black-color grid-2"></div>
        <div className="flex items-end grid-default-color grid-3"></div>
        <div className="flex items-end grid-special-color grid-4"></div>
        <div className="flex items-end grid-black-color grid-5"></div>
      </div>
      </div>
    </section>
  );
};

export default About;
