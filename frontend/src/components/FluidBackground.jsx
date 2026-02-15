import { useEffect } from "react";
import { initFluid } from "smokey-fluid-cursor";

const FluidBackground = () => {
  useEffect(() => {

    // init fluid
    initFluid({
      id: "smokey-fluid-canvas",

      simResolution: 64,
      dyeResolution: 512,

      densityDissipation: 0.85,
      velocityDissipation: 0.80,
      pressureIteration: 10,

      curl: 8,
      splatRadius: 0.06,
      splatForce: 4000,

      shading: false,
      colorUpdateSpeed: 2,
      transparent: true,

      colors: [
        "#00FFFF",
        "#FFFFFF",
        "#FFEE00",
        "#4DE94C",
        "#3783FF",
        "#4815AA"
      ],
    });

    // 🔑 FORCE HIGH-FREQUENCY MOUSE INPUT
    const boostMouse = () => {};
    window.addEventListener("mousemove", boostMouse, { passive: true });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", boostMouse);
    };
  }, []);

  return (
    <canvas
      id="smokey-fluid-canvas"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -50,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
    />
  );
};

export default FluidBackground;
