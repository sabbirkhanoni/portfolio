import React, { useState } from 'react'

const Research = () => {
  const [activeTab, setActiveTab] = useState('all')

  const researchWorks = [
    {
      id: 1,
      type: 'paper',
      title: "Zone-Based Risk Prediction and Risk-Aware Intelligent Routing for Smart Navigation Using Machine Learning.",
      description: "This paper presents a novel approach to enhance smart navigation systems by integrating zone-based risk prediction and risk-aware intelligent routing using advanced machine learning techniques. We developed a comprehensive framework that analyzes real-time traffic data, historical accident records, and environmental factors to predict high-risk zones and provide safer route recommendations for drivers.",
      abstract: "In this paper, we propose a novel framework for smart navigation systems that incorporates zone-based risk prediction and risk-aware intelligent routing. Our approach leverages advanced machine learning techniques to analyze real-time traffic data, historical accident records, and environmental factors, enabling the identification of high-risk zones and the provision of safer route recommendations for drivers.",
      conference: "",
      status: "Pending",
      // authors: ["Your Name", "Dr. Jane Smith", "Dr. John Doe"],
      date: "January 2026",
      image: '/reasearch.jpg',
      tags: ["Machine Learning", "Smart Navigation", "Risk Prediction", "Intelligent Routing", "Urban Safety"],
      pdfLink: "#",
      doi: "Pending",
      citations: 0,
      // Attached Web Project
      webProject: {
        title: "Zone-Based Risk Prediction and Risk-Aware Intelligent Routing for Smart Navigation Using Machine Learning. ",
        description: "Developed a zone-based machine learning framework that predicts urban risk with over 99% accuracy (R² = 0.999) and integrates it into a risk-aware intelligent routing system.",
        features: [
          "Zone-Based Risk Prediction: Utilized machine learning models to analyze traffic patterns, historical accident data, and environmental factors to predict high-risk zones in urban areas.",
          "Risk-Aware Intelligent Routing: Developed an intelligent routing algorithm that incorporates risk predictions to provide safer route recommendations for drivers, reducing exposure to high-risk areas.",
          "Real-Time Data Integration: Integrated real-time traffic data and environmental conditions to continuously update risk predictions and routing recommendations.",
          "Performance Optimization: Optimized prediction analysis time, achieving a 70% reduction in processing time and enabling real-time route adjustments."
        ],
        technologies: ["React", "Python", "FastAPI", "ML Models", "OpenStreetMap API", "Leaflet.js"],
        status: "Live",
        image: '/SafeRouteAI.png',
        demoLink: "#",
        githubLink: "#",
        videoLink: "#",
        // users: "0+ researchers",
        impact: "Reduced prediction analysis time by 70%"
      }
    }
  ]

  const filteredWorks = researchWorks

  return (
    <section className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <div className="max-w-8xl w-full space-y-12">
        
        <div className="text-center space-y-4">
          <h1
            style={{ fontFamily: 'Acorn, sans-serif'}}
            className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Exploring cutting-edge technologies and contributing to scientific advancement through research publications and practical implementations
          </p>
        </div>

        {/* Research Works Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredWorks.map((work, index) => (
            <div 
              key={work.id}
              className="space-y-6"
            >
              {/* Research Paper Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-gray-200">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        work.status === 'Published' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-400 text-gray-900'
                      }`}>
                        {work.status}
                      </span>
                      {work.citations > 0 && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {work.citations} Citations
                        </span>
                      )}
                      {work.webProject && (
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          💻 Has Web Project
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2 hover:text-[rgb(8,165,202)] transition-colors">
                        {work.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        📅 {work.date} • {work.conference}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      <strong>Description:</strong> {work.description}
                    </p>

                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-[rgb(8,165,202)]">
                      <p className="text-sm text-gray-600 italic">
                        <strong>Abstract:</strong> {work.abstract}
                      </p>
                    </div>

                    {/* {<div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Authors:</p>
                      <div className="flex flex-wrap gap-2">
                        {work.authors.map((author, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-300"
                          >
                            {author}
                          </span>
                        ))}
                      </div>
                    </div>} */}

                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {/* <a 
                        href={work.pdfLink}
                        className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] text-white font-semibold px-6 py-2.5 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a> */}
                      {work.doi !== 'Pending' && (
                        <a 
                          href={`https://doi.org/${work.doi}`}
                          className="bg-white border-2 border-gray-900 text-gray-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-900 hover:text-white transition-all"
                        >
                          DOI: {work.doi}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Attached Web Project (if exists) */}
              {work.webProject && (
                <div className="ml-0 md:ml-12 border-l-4 border-purple-500 pl-0 md:pl-8">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                        <img 
                          src={work.webProject.image} 
                          alt={work.webProject.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            💻 Related Web Project
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            work.webProject.status === 'Live' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-yellow-400 text-gray-900'
                          }`}>
                            {work.webProject.status}
                          </span>
                        </div>
                        {/* {work.webProject.users && (
                          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <p className="text-sm font-semibold text-gray-900">👥 {work.webProject.users}</p>
                          </div>
                        )} */}
                      </div>

                      {/* Content Section */}
                      <div className="p-8 space-y-4 flex flex-col justify-between bg-white">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span className="text-sm font-semibold text-purple-600">Practical Implementation</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                              {work.webProject.title}
                            </h3>
                          </div>

                          <p className="text-gray-700 leading-relaxed">
                            {work.webProject.description}
                          </p>

                          {work.webProject.impact && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                              <p className="text-green-800 font-semibold text-sm">
                                🎯 Impact: {work.webProject.impact}
                              </p>
                            </div>
                          )}

                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                            <ul className="space-y-2">
                              {work.webProject.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-purple-600 mt-1">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</p>
                            <div className="flex flex-wrap gap-2">
                              {work.webProject.technologies.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                          <a 
                            href={work.webProject.demoLink}
                            className="flex-1 min-w-[120px] text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2.5 rounded-lg transition-all hover:shadow-lg"
                          >
                            🔗 Live Demo
                          </a>
                          <a 
                            href={work.webProject.videoLink}
                            className="flex-1 min-w-[120px] text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:shadow-lg"
                          >
                            ▶️ Video
                          </a>
                          <a 
                            href={work.webProject.githubLink}
                            className="flex-1 min-w-[120px] text-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-4 py-2.5 rounded-lg transition-all"
                          >
                            💻 GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research