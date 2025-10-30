'use client'

import { Leaf, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LatestUpdates() {
  const blogPosts = [
    {
      id: 1,
      title: "Suscipit Laboriosam Nisi",
      snippet: "Lorem ipsum is simply dummy text of the printing and type...",
      image: "https://placehold.co/500x300/EEE/333?text=Blog+Image+1",
      date: "27",
      month: "Oct-2020",
      comments: "0 Comments",
      layout: "image-left"
    },
    {
      id: 2,
      title: "Aliquam Quaerat Voluptatem",
      snippet: "Lorem ipsum is simply dummy text of the printing and type...",
      image: "https://placehold.co/500x300/EEE/333?text=Blog+Image+2",
      date: "27",
      month: "Oct-2020",
      comments: "0 Comments",
      layout: "image-right"
    }
  ]

  // Brand logo bar removed as requested

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Leaf Background - Top Left */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTI4IDMyQzE2MCA0OCAxODQgNjQgMTkyIDEyOEMxODQgMTkyIDE2MCAyMDggMTI4IDIyNEM5NiAyMDggNzIgMTkyIDY0IDEyOEM3MiA2NCA5NiA0OCAxMjggMzJaIiBmaWxsPSIjMjJjNTVlIiBvcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMTI4IDQ4QzE0NCA2MCAxNjAgODAgMTY4IDEyOEMxNjAgMTc2IDE0NCAxOTYgMTI4IDIwOEMxMTIgMTk2IDk2IDE3NiA4OCAxMjhDOTYgODAgMTEyIDYwIDEyOCA0OFoiIGZpbGw9IiMyMmM1NWUiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Decorative Leaf Background - Top Right */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTI4IDMyQzE2MCA0OCAxODQgNjQgMTkyIDEyOEMxODQgMTkyIDE2MCAyMDggMTI4IDIyNEM5NiAyMDggNzIgMTkyIDY0IDEyOEM3MiA2NCA5NiA0OCAxMjggMzJaIiBmaWxsPSIjMjJjNTVlIiBvcGFjaXR5PSIwLjMiLz4KICA8cGF0aCBkPSJNMTI4IDQ4QzE0NCA2MCAxNjAgODAgMTY4IDEyOEMxNjAgMTc2IDE0NCAxOTYgMTI4IDIwOEMxMTIgMTk2IDk2IDE3NiA4OCAxMjhDOTYgODAgMTEyIDYwIDEyOCA0OFoiIGZpbGw9IiMyMmM1NWUiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="w-full max-w-[1032px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Leaf Icon */}
          <div className="flex justify-center mb-4">
            <Leaf className="w-6 h-6 text-green-500" />
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-2">
            Latest Updates
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            OUR PLANT HOUSE
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-16 mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              post.layout === 'image-right' ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Image */}
              <div className={`${post.layout === 'image-right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg flex justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[90%] h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${post.layout === 'image-right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-3xl font-bold text-gray-400">{post.date}</span>
                    <span className="text-black font-medium">{post.month}</span>
                    <span className="text-gray-500">{post.comments}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-black hover:text-green-600 transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.snippet}
                  </p>

                  {/* Read More */}
                  <a 
                    href="/blogs" 
                    className="inline-block text-black font-semibold hover:text-green-600 transition-colors duration-300"
                  >
                    Read More &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Navigation removed as per request */}

        {/* Brand Logo Bar removed */}
      </div>
    </section>
  )
}
