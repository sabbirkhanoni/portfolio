import React, {useState} from "react";
import ParticleBackground from "../components/ParticleBackground";
import TechStack from "../components/TechStack";
import { FaDiscord, FaGithub, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
const About = () => {

  const [streakLoaded, setStreakLoaded] = useState(false);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [langsLoaded, setLangsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen p-3 overflow-hidden text-white bg-gray-900">
      
      <ParticleBackground />

      <div className="relative">

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

          <div className="flex flex-col gap-2 p-2 text-justify">
            <p className="font-bold text-sm md:text-lg lg:text-xl">
              Hello, I'm Md. Sabbir Khan Oni
            </p>
            <p className='text-xs md:text-sm lg:text-md'>
              I am a Computer Science and Engineering student with a growing
              interest in becoming a Software Engineer. I am currently focusing
              on expanding my skills in Competitive Programming and continuously
              learning to improve my Problem-Solving abilities.
            </p>
          </div>
        </div>

        <div className="flex text-center items-center justify-center grid-black-color grid-2">
          <div className="flex flex-col lg:flex-row md:flex-col gap-10 my-2">
              <div className="flex flex-col md:flex-row lg:flex-col gap-4 justify-center items-center">
                <div className="w-72">
                  {!streakLoaded && (
                    <div className="w-full h-40 rounded-lg bg-gray-700 animate-pulse" />
                  )}

                  <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=sabbirkhanoni&theme=algolia&date_format=M%20j%5B%2C%20Y%5D"
                    alt="GitHub Streak"
                    onLoad={() => setStreakLoaded(true)}
                    className={`transition-opacity duration-500 ${
                      streakLoaded ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  />
                </div>


              <div className="w-72">
                {!statsLoaded && (
                  <div className="w-full h-40 rounded-lg bg-gray-700 animate-pulse" />
                )}

                <img
                  src="https://github-readme-stats.vercel.app/api?username=sabbirkhanoni&theme=algolia"
                  alt="GitHub Stats"
                  onLoad={() => setStatsLoaded(true)}
                  className={`transition-opacity duration-500 ${
                    statsLoaded ? "opacity-100" : "opacity-0 absolute"
                  }`}
                />
              </div>
            </div>

            <div className="w-60 my-2">
              {!langsLoaded && (
                <div className="w-full h-40 rounded-lg bg-gray-700 animate-pulse" />
              )}

              <img
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=sabbirkhanoni&amp;theme=algolia&amp;hide_border=false&amp;no-bg=true&amp;no-frame=true&amp;langs_count=10"
                alt="Top Languages"
                onLoad={() => setLangsLoaded(true)}
                className={`transition-opacity duration-500 ${
                  langsLoaded ? "opacity-100" : "opacity-0 absolute"
                }`}
              />
            </div>
          </div>

        </div>




        <div className="flex items-end grid-default-color grid-3">
          <Frameworks/>
        </div>


        <div className="flex items-center grid-special-color grid-4">
            <div className='flex flex-col gap-4'>
              <h1 className="font-bold text-lg">Connect With Me:</h1>
              <div className="flex gap-2">
                <a href="#" target="_blank">
                  <FaGithub className="h-6 w-6" />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="#" target="_blank">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" target="_blank">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" target="_blank">
                  <FaPinterest className="h-6 w-6" />
                </a>
                <a>
                  <FaDiscord className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <figure>
                <Globe className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-2" />
              </figure>
            </div>

        </div>



        <div className="flex flex-col items-center grid-black-color grid-5 gap-4">
         <h3 className="font-bold text-lg">Technologies I Work With</h3>
         <TechStack />
        </div>

      </div>
      </div>
    </section>
  );
};

export default About;
