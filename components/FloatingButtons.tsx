'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      // Add user message
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: 'user' }])
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: prev.length + 2, 
          text: "Thank you for your message! Our team will get back to you soon.", 
          sender: 'bot' 
        }])
      }, 1000)
      
      setInputMessage('')
    }
  }

  return (
    <>
      {/* Kisan Image - Permanent display near chatbot */}
      <div className="fixed bottom-[80px] left-[-40px] z-40 pointer-events-none">
        <img
          src="/Website Images/kisan 2.png"
          alt="Kisan"
          className="w-[192.56px] h-[192.56px] md:w-[275.08px] md:h-[275.08px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Floating Chatbot Button - Bottom Left */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-20 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        aria-label="Open chatbot"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-40 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-bold">Oksingreen Support</h3>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-green-700 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
            </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/917489998599"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  )
}



