import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2023 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Led development of scalable web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.",
      achievements: [
        "Architected and deployed cloud-based solutions using AWS",
        "Mentored team of 5 junior developers",
        "Reduced application load time by 60% through optimization"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      duration: "Mar 2021 - Dec 2022",
      location: "New York, NY",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with UX team to create intuitive user interfaces for enterprise clients.",
      achievements: [
        "Built reusable component library used across 10+ projects",
        "Improved mobile responsiveness across all products",
        "Reduced bug reports by 35% through comprehensive testing"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest"]
    },
  ]

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <div className="max-w-6xl w-full space-y-2">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 style={{ fontFamily: 'Acorn, sans-serif'}} className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-gray-600 text-md">My professional journey and accomplishments</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[rgb(8,165,202)] to-[rgb(13,13,13)]"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200">
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 flex-wrap justify-start md:justify-end">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                          {exp.type}
                        </span>
                        <span className="text-gray-500 text-sm">📍 {exp.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-[rgb(8,165,202)] font-semibold text-lg">{exp.company}</p>
                      <p className="text-gray-500 text-sm">📅 {exp.duration}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4 space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[rgb(8,165,202)] mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-start">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center pt-8">
          <a 
            href="#" 
            className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] text-white font-semibold px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Experience