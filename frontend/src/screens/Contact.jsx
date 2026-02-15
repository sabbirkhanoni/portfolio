import React, { useState } from 'react'

const Contact = () => {
  const [aiMessage, setAiMessage] = useState('')
  const [directMessage, setDirectMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleAiSubmit = (e) => {
    e.preventDefault()
    // Handle AI chat submission
    console.log('AI Message:', aiMessage)
    setAiMessage('')
  }

  const handleDirectSubmit = (e) => {
    e.preventDefault()
    // Handle direct message submission
    console.log('Direct Message:', { name, email, message: directMessage })
    setName('')
    setEmail('')
    setDirectMessage('')
  }

  return (
    <section className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <div className="max-w-8xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1
          style={{ fontFamily: 'Acorn, sans-serif'}}
          className="text-5xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] to-[rgb(13,13,13)] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg">Choose your preferred way to connect with me</p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* AI Chat Card */}
          <div className="bg-gradient-to-br from-[rgb(15,78,20)] to-[rgb(135,234,122)] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Chat With AI</h2>
                  <p className="text-white/80 text-sm">Instant responses powered by AI</p>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-h-[300px] flex flex-col">
                <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                  {/* Sample messages */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                    👋 Hi! I'm an AI assistant. Ask me anything about this portfolio or the owner's experience!
                  </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleAiSubmit} className="space-y-3">
                  <textarea
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    rows="3"
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-[rgb(15,78,20)] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="bg-gradient-to-br from-[rgb(8,165,202)] to-[rgb(13,13,13)] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Chat With Me</h2>
                  <p className="text-white/80 text-sm">Direct message to my inbox</p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleDirectSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold">Your Message</label>
                  <textarea
                    value={directMessage}
                    onChange={(e) => setDirectMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows="4"
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[rgb(8,165,202)] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact