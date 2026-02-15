import React from 'react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard for managing products and orders.",
      image: "/Project2.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      videoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and progress tracking dashboard.",
      image: "/Project2.png",
      technologies: ["Next.js", "Firebase", "Tailwind", "TypeScript"],
      liveLink: "#",
      videoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Real-time weather application providing accurate forecasts, interactive maps, and location-based weather alerts.",
      image: "/Project2.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
      liveLink: "#",
      videoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization, engagement tracking, and performance insights.",
      image: "/Project2.png",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      liveLink: "#",
      videoLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder allowing users to create professional portfolios with customizable templates and themes.",
      image: "/Project2.png",
      technologies: ["React", "DnD Kit", "Supabase", "Framer Motion"],
      liveLink: "#",
      videoLink: "#",
      githubLink: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-transparent text-black flex flex-col items-center justify-center px-4 lg:px-4 sm:px-2">
      <div className="max-w-screen w-full space-y-2">
        <div className="text-center mt-5 space-y-2">
          <h1
            style={{ fontFamily: 'Acorn, sans-serif'}}
          className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-gray-600 text-lg">Showcasing my work and projects</p>
        </div>
        
        <div className='grid grid-cols-1 gap-5 mt-5'>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`w-full h-fit backdrop-blur-xl bg-white/5 border border-gray-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`grid md:grid-cols-2 gap-0`}>
                {/* Image Section */}
                <div className={`relative flex justify-center overflow-hidden backdrop-blur-xl ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100 flex  object-scale-down hover:scale-110 transition-transform duration-500" 
                  />
                  
                </div>
                
                {/* Content Section */}
                <div className={`p-8 flex flex-col justify-between ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 hover:text-[rgb(8,165,202)] transition-colors">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className='py-2 px-4 bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className='flex flex-wrap gap-3 mt-6'>
                    <a 
                      href={project.liveLink} 
                      className="flex-1 min-w-[120px] text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg px-4 py-2.5 transition-all hover:shadow-lg"
                    >
                      🔗 Live Demo
                    </a>
                    <a 
                      href={project.videoLink} 
                      className="flex-1 min-w-[120px] text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-4 py-2.5 transition-all hover:shadow-lg"
                    >
                      ▶️ Video
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="flex-1 min-w-[120px] text-center border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-semibold rounded-lg px-4 py-2.5 transition-all duration-500"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project