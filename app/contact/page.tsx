'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // For static frontend deployment, show success message
    // Backend API will be connected later
    setTimeout(() => {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been received. We will contact you soon via email or phone.' 
      })
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)

    // TODO: Connect to backend API when deployed
    // For now, form data is logged to console
    console.log('Contact form submission:', formData)
  }

  return (
    <main className="min-h-screen">
      <NavbarMain />
      
      {/* Page Wrapper with Dark Leafy Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Layer with Dark Leafy Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')`
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        
        {/* Main Contact Card */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column (Info) */}
              <div className="p-8 md:p-12">
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">
                  Let&apos;s Get In Touch
                </h2>
                
                {/* Contact Blocks */}
                <div className="mt-8 space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@agrikrishifarms.com</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">79873 84443</p>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">Indore</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column (Form) */}
              <div className="bg-gray-50 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  
                  {/* Email Field - Optional */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                  
                  {/* Subject Field */}
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                  
                  {/* Message Field */}
                  <textarea
                    name="message"
                    placeholder="Write Us"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                  
                  {/* Submit Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-lg ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
