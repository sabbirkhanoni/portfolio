import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false, zIndex: 50 },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: false,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4
            }
          }
        },
        particles: {
          number: { 
            value: 65,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#fff", 
          },
          links: {
            enable: true,
            distance: 130,
            opacity: 0.2,
            color: "#fff"
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 }
        }
      }}
      className="absolute inset-0 w-full h-full z-50 pointer-events-none"
    />
  );
};

export default ParticleBackground;
