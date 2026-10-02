import React, { useMemo } from "react";
import { OrbitingCircles } from "./OrbitCircle";

const SKILLS_1 = [
  "html5",
  "css3",
  "tailwindcss",
  "type",
  "javascript",
  "react",
  "nestjs",
  "nodejs",
  "java",
  "cplusplus",
  "csharp",
  "dotnet",
  "dotnetcore",
  "spring-boot",
  "redis",
];

const SKILLS_2 = [
  "redux",
  "oracle",
  "postgresql",
  "mysql",
  "azure",
  "docker",
  "rabbitmq",
  "linux",
  "git",
];

function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={36} radius={140} speed={3}>
        {SKILLS_1.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={85} reverse speed={1}>
        {SKILLS_2.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img loading="lazy" src={src} className="duration-200 rounded-sm hover:scale-125 will-change-transform" alt="tech logo" />
);

export default Frameworks;