import CardDesign from "./CardDesign";

const TechStack = () => {
  return (
    <div className="flex justify-center grid-2 
                w-full h-full rounded-md overflow-hidden">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2
                  w-full h-full overflow-y-auto no-scrollbar ">

    {/* Frontend */}
    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="HTML5" />
      <CardDesign text="CSS3" />
      <CardDesign text="Tailwind CSS" />
    </div>
    {/* Libraries */}
    <div className="flex flex-col gap-1 items-center">
        <CardDesign text="JavaScript" />
        <CardDesign text="TypeScript" />
        <CardDesign text="ReactJs" />
        <CardDesign text="NextJs" />
    </div>

    {/* Backend */}
    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="NodeJs" />
      <CardDesign text="ExpressJs" />
      <CardDesign text="NestJs" />
    </div>

    {/* Databases */}
    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="MySQL" />
      <CardDesign text="PostgreSQL" />
      <CardDesign text="MongoDB" />
      <CardDesign text="MSSQL Server" />
    </div>

    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="Redux" />
      <CardDesign text="JWT" />
      <CardDesign text="TypeORM" />
    </div>

        {/* Frameworks */}
    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="ASP .NET MVC" />
      <CardDesign text="ASP .NET Core Web API" />
      <CardDesign text=".NET Framework" />
    </div>

    <div className="flex flex-col gap-1 items-center">
      <CardDesign text="Git/GitHub" />
      <CardDesign text="AWS/GCP" />
      <CardDesign text="Docker" />
      <CardDesign text="Kubernetes" />
      <CardDesign text="Postman" />
      
    </div>

  </div>
</div>

  );
};

export default TechStack;
