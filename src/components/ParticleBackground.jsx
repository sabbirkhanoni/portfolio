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
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.8
              }
            }
          }
        },
        particles: {
          number: { value: 150 },
          links: {
            enable: true,
            distance: 150,
            opacity: 0.4
          },
          move: { enable: true, speed: 1.5 },
          size: { value: 2 },
          opacity: { value: 0.5 }
        }
      }}
      className="absolute inset-0 w-full h-full z-50 pointer-events-none"
    />
  );
};

export default ParticleBackground;
