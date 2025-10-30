'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, ChevronUp, Youtube, Instagram, Facebook, CreditCard, Shield, Truck, Headphones } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <>
      {/* Main Footer */}
      <footer className="relative overflow-hidden" style={{ backgroundColor: '#0f2e1f' }}>
        {/* Leafy Background Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxkZWZzPjxwYXR0ZXJuIGlkPSdsZWFmJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBwYXR0ZXJudW5pdHM9dXNlclNwYWNlT25Vc2U+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nIzEyMjkxNycvPjxlbGxpcHNlIGN4PScyMCUnIGN5PSczMCUnIHJ4PScxNScgcnk9JzI1JyBmaWxsPScjMTkzODI2JyBvcGFjaXR5PScwLjI1Jy8+PGVsbGlwc2UgY3g9JzgwJScgY3k9JzIwJScgcng9JzEyJyByeT0nMjAnIGZpbGw9JyMxYjM3MjMnIG9wYWNpdHk9JzAuMjUnLz48ZWxsaXBzZSBjeD0nNTAlJyBjeT0nNzAlJyByeD0nMTgnIHJ5PSczMCcgZmlsbD0nIzE5MzgyNycgb3BhY2l0eT0nMC4yJy8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd1cmwoI2xlYWYpJy8+PC9zdmc+')`
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16 font-sans text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Column 1: Store Information */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 font-serif">Store Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Indore, Madhya Pradesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <div className="text-white/90 text-sm">
                    <div>+91 8518 817 482</div>
                    <div>+91 8817 500 835</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/90 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Oksingreen@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 font-serif">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Our Services</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Term and condition</a></li>
              </ul>
            </div>

            {/* Column 3: My Account */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 font-serif">My Account</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">My Account</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Order History</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Wish List</a></li>
                <li><a href="#" className="text-white text-sm hover:text-green-300 transition-colors duration-300">Newsletter</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter Signup */}
            <div>
              <div className="bg-lime-500 rounded-lg p-6">
                <h3 className="text-white text-lg font-bold mb-2 font-serif">Sign Up For Newsletter</h3>
                <p className="text-white text-sm mb-4">Wants to get latest updates! sign-up for free.</p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="border-b border-white/70 pb-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-transparent text-white placeholder-white/90 outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sub-Footer */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white/80">
            
            {/* Column 1: Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">Powered By Oksingreen © 2025</p>
            </div>

            {/* Column 2: Social Media Icons (moved to center) */}
            <div className="flex justify-center items-center gap-3">
              <a 
                href="https://youtube.com/@oksingreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/40 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/oksingreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/40 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/oksingreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/40 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            {/* Column 3 removed intentionally */}
            <div className="hidden md:block" />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center shadow-lg hover:bg-lime-600 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </>
  )
}