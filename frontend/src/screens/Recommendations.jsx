import React, { useState } from 'react'

const Recommendations = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const recommendations = [
    {
      id: 1,
      name: "Md Sazzad Hossain",
      title: "Professor of Computer Science",
      organization: "Stanford University",
      department: "Department of Computer Science",
      image: "/teacher1.png",
      relationship: "Research Supervisor & Course Instructor",
      duration: "Worked together: 2022 - 2024",
      email: "md.sazzad.hossain@stanford.edu",
      letter: "I am pleased to recommend [Your Name] for graduate studies/employment. During their time in my Advanced Machine Learning course and as my research assistant, they demonstrated exceptional analytical abilities and a deep passion for artificial intelligence. Their research on climate prediction models was published in a top-tier conference, showcasing their ability to conduct rigorous academic work. [Your Name] consistently went above and beyond, mentoring junior students and contributing significantly to our research lab. Their technical skills, combined with strong communication abilities, make them an outstanding candidate.",
      highlights: [
        "Top 5% of the class in Advanced Machine Learning",
        "Published research in International AI Conference",
        "Excellent leadership and mentoring skills",
        "Outstanding problem-solving abilities"
      ],
      rating: {
        technical: 5,
        research: 5,
        teamwork: 5,
        communication: 4.5
      },
      date: "December 15, 2024",
      letterPDF: "#"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Associate Professor of Software Engineering",
      organization: "MIT",
      department: "Department of Electrical Engineering & Computer Science",
      image: "/teacher2.png",
      relationship: "Academic Advisor & Project Supervisor",
      duration: "Worked together: 2021 - 2023",
      email: "m.chen@mit.edu",
      letter: "It is with great enthusiasm that I recommend [Your Name]. As their academic advisor and supervisor for their capstone project on blockchain-based healthcare systems, I witnessed firsthand their remarkable technical proficiency and innovative thinking. The project not only received the highest grade in the cohort but was also selected for presentation at our annual research symposium. [Your Name] has a rare combination of strong theoretical knowledge and practical implementation skills. They are highly motivated, detail-oriented, and possess excellent collaborative skills.",
      highlights: [
        "Best Capstone Project Award 2023",
        "GPA: 3.9/4.0 in Software Engineering courses",
        "Strong foundation in system design and architecture",
        "Exceptional code quality and documentation"
      ],
      rating: {
        technical: 5,
        research: 4.5,
        teamwork: 5,
        communication: 5
      },
      date: "November 28, 2024",
      letterPDF: "#"
    }
  ]

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center py-2 px-4 sm:px-8">
      <div className="max-w-8xl w-full space-y-12">
        
        <div className="text-center space-y-4">
          <h1
            style={{ fontFamily: 'Acorn, sans-serif'}}
            className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
            Recommendations
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Testimonials from distinguished professors and academic mentors who have worked closely with me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recommendations.map((rec) => (
            <div 
              key={rec.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={rec.image} 
                    alt={rec.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{rec.name}</h3>
                    <p className="text-white/90 text-sm font-semibold">{rec.title}</p>
                    <p className="text-white/80 text-sm">{rec.organization}</p>
                    <p className="text-white/70 text-xs mt-1">{rec.department}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Relationship & Duration */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-[rgb(8,165,202)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 font-semibold">{rec.relationship}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-[rgb(8,165,202)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">{rec.duration}</span>
                  </div>
                </div>

                {/* Letter Preview */}
                <div>
                  <p className={`text-gray-700 leading-relaxed italic ${
                    expandedCard === rec.id ? '' : 'line-clamp-4'
                  }`}>
                    "{rec.letter}"
                  </p>
                  <button
                    onClick={() => toggleExpand(rec.id)}
                    className="text-[rgb(8,165,202)] font-semibold text-sm mt-2 hover:underline"
                  >
                    {expandedCard === rec.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {rec.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[rgb(8,165,202)] mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rating Bars */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-900">Assessment:</h4>
                  {Object.entries(rec.rating).map(([skill, score]) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600 capitalize">{skill.replace('_', ' ')}</span>
                        <span className="text-xs font-bold text-gray-900">{score}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(score / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Issued on</p>
                    <p className="text-sm font-semibold text-gray-900">{rec.date}</p>
                  </div>
                  <a 
                    href={rec.letterPDF}
                    className="bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] text-white font-semibold px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Letter
                  </a>
                </div>

                {/* Contact Info (Optional) */}
                <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${rec.email}`} className="text-sm text-blue-600 hover:underline">
                    {rec.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations