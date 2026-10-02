'use client';

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaComments } from 'react-icons/fa'

const Contact = () => {
  const [directMessage, setDirectMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDirectMailSubmit = async (e) => {
    e.preventDefault()
    
    // Validate fields
    if (!name.trim() || !email.trim() || !directMessage.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL

      const response = await axios.post(`${backendUrl}/mail/send`, {
        name,
        email,
        message: directMessage
      })

      if (response.data && response.data.success) {
        toast.success('Email sent successfully!')
        setDirectMessage('')
        setEmail('')
        setName('')
      } else {
        toast.error('Failed to send email: ' + (response.data?.message || 'Server error'))
      }

    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className="relative py-8 sm:py-12 md:py-14 px-2 sm:px-4 md:px-6 text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 bg-[rgb(8,165,202)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-150px] w-96 h-96 bg-[#ff8c32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1360px] space-y-12 z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgb(8,165,202)]/30 bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <FaComments className="text-sm animate-pulse" /> Get In Touch
          </div>
          <h1
            style={{ fontFamily: 'Acorn, sans-serif'}}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-300 to-teal-200 bg-clip-text text-transparent"
          >
            Let's Build Something Exceptional
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Have a project in mind, an engineering opportunity, or research collaboration? Drop a line and I'll respond promptly.
          </p>
        </div>

        {/* Contact Container Bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1620]/95 via-[#090e13]/95 to-[#121a22]/95 backdrop-blur-2xl shadow-2xl p-6 md:p-10 relative overflow-hidden"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(8,165,202)] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="space-y-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Available for Impactful Engineering Roles & AI Projects
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Whether you're looking for high-performance full-stack web applications, machine learning architectures, or algorithmic systems, let's talk.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2.5 rounded-lg bg-[rgb(8,165,202)]/10 text-[rgb(8,165,202)]">
                      <FaEnvelope className="text-base" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-gray-400">Email Directly</p>
                      <a href="mailto:mdsabbirkhanoni@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-300 transition">
                        mdsabbirkhanoni@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                      <FaMapMarkerAlt className="text-base" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-gray-400">Location</p>
                      <p className="text-sm font-semibold text-white">Dhaka, Bangladesh (UTC+6)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs text-emerald-300 font-medium">
                  Guaranteed response within 24 hours
                </span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 flex flex-col justify-center p-2 md:p-4">
              <form onSubmit={handleDirectMailSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070b0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(8,165,202,0.25)] transition duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#070b0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(8,165,202,0.25)] transition duration-200"
                    />
                  </div>

                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    value={directMessage}
                    onChange={(e) => setDirectMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or idea..."
                    rows={5}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#070b0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(8,165,202,0.25)] transition duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[rgb(8,165,202)] via-cyan-400 to-teal-300 text-gray-950 font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(8,165,202,0.4)] hover:shadow-[0_0_35px_rgba(8,165,202,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className={`text-sm transition-transform duration-300 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact