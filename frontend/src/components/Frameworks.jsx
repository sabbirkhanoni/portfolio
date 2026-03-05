import { OrbitingCircles } from "./OrbitCircle";


function Frameworks() {
  const skills = [
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

  const skills2 = [
    "git",
    "linux",
    "rabbitmq",
    "docker",
    "azure",
    "mysql",
    "postgresql",
    "oracle",
    "redux",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={150} speed={5}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={90} reverse speed={1}>
        {skills2.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-150" />
);

export default Frameworks;