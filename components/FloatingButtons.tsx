'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

export default function FloatingButtons() {
  const [showChat, setShowChat] = useState(false)

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp API link
    window.open('https://wa.me/1234567890', '_blank')
  }

  const handleChatBot = () => {
    setShowChat(!showChat)
    console.log('ChatBot toggled')
  }

  return (
    <>
      {/* Floating WhatsApp Button - Bottom Right */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Floating ChatBot Button - Bottom Left */}
      <button
        onClick={handleChatBot}
        className="fixed bottom-6 left-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        aria-label="Chat with us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window (placeholder) */}
      {showChat && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Chat Support</h3>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="text-center text-gray-500 py-8">
              <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p>Start a conversation with us!</p>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



