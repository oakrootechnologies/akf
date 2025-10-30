'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function AsymmetricalPromoGrid() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1032px] mx-auto px-4">
          <div className="origin-top scale-[0.8]">
            {/* Main Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 w-full">
            
            {/* Grid Cell 1 (Top-Left): Plant Image */}
            <div className="relative flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden w-full aspect-[4/3]">
              {/* Leaf Background Graphic */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTUwIDEwMEMxNTAgNTAgMjAwIDUwIDIwMCAxMDBDMjAwIDE1MCAxNTAgMTUwIDE1MCAxMDBaIiBmaWxsPSIjMjJjNTVlIiBvcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMjAwIDE1MEMyMDAgMTAwIDI1MCAxMDAgMjUwIDE1MEMyNTAgMjAwIDIwMCAyMDAgMjAwIDE1MFoiIGZpbGw9IiMyMmM1NWUiIG9wYWNpdHk9IjAuMiIvPgogIDxwYXRoIGQ9Ik0xMDAgMjAwQzEwMCAxNTAgMTUwIDE1MCAxNTAgMjAwQzE1MCAyNTAgMTAwIDI1MCAxMDAgMjAwWiIgZmlsbD0iIzIyYzU1ZSIgb3BhY2l0eT0iMC4yNSIvPgogIDxwYXRoIGQ9Ik0yNTAgMjUwQzI1MCAyMDAgMzAwIDIwMCAzMDAgMjUwQzMwMCAzMDAgMjUwIDMwMCAyNTAgMjUwWiIgZmlsbD0iIzIyYzU1ZSIgb3BhY2l0eT0iMC4xNSIvPgogIDxwYXRoIGQ9Ik0xNTAgMzAwQzE1MCAyNTAgMjAwIDI1MCAyMDAgMzAwQzIwMCAzNTAgMTUwIDM1MCAxNTAgMzAwWiIgZmlsbD0iIzIyYzU1ZSIgb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Plant Image */}
              <img
                src="https://placehold.co/400x400/F5F5F5/333?text=Wall+Plant"
                alt="Wall Plant"
                className="relative z-10 w-full h-full object-cover transform scale-110"
              />
            </div>

            {/* Grid Cell 2 (Top-Right): Text Block 1 */}
            <div className="flex items-center justify-center p-8">
              <div className="text-left max-w-md">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  Nutrients Plant Collection
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  Get 50% OFF On This Month
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-9 py-3 rounded-full font-semibold transition-colors duration-300 text-base">
                  Read More
                </button>
              </div>
            </div>

            {/* Grid Cell 3 (Bottom-Left): Text Block 2 */}
            <div className="flex items-center justify-center p-8">
              <div className="text-left max-w-md">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  New In Trend
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Niventore Veritatis Et Quasi Architecto Beatae Dicta Sun Explicabo. Nemo Enim Ipsum Volup...
                </p>
                <button 
                  onClick={openVideoModal}
                  className="bg-green-500 hover:bg-green-600 text-white px-9 py-3 rounded-full font-semibold transition-colors duration-300 text-base"
                >
                  Watch Now
                </button>
              </div>
            </div>

            {/* Grid Cell 4 (Bottom-Right): Video Block */}
            <div 
              className="relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden cursor-pointer group w-full aspect-video"
              onClick={openVideoModal}
            >
              {/* Video Thumbnail */}
              <img
                src="https://placehold.co/500x300/CCC/333?text=Video+Thumbnail"
                alt="Video Thumbnail"
                className="w-full h-full object-cover transform scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-green-500 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={closeVideoModal}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video Player */}
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
