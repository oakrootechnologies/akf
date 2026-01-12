'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Calendar, Clock, Search, TrendingUp } from 'lucide-react'

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'blogs' | 'updates'>('blogs')

  const blogs = [
    {
      id: 1,
      slug: 'the-green-gold-rush',
      title: "The Green Gold Rush: How Horticulture & Agroforestry Decrease Carbon Consumption and Attract Smart Investment",
      excerpt: "Discover how horticulture and agroforestry are transforming agriculture into a carbon-capture technology. Learn how these practices decrease carbon consumption, create profitable opportunities for farmers, and attract smart investment in the growing ESG market.",
      mainImage: "/realblog/1 MAIN.webp",
      video: "/realblog/1.mp4",
      date: "November 29, 2025",
      readTime: "8 min read",
      category: "Horticulture",
      author: "Agrikrishi Farms Team",
      isFeatured: true
    },
    {
      id: 2,
      slug: 'beyond-the-harvest',
      title: "Beyond the Harvest: Why Healthy Soil is Horticulture's Greatest Long-Term Asset",
      excerpt: "Discover why healthy soil is not just dirt, but a living ecosystem that's horticulture's greatest long-term asset. Learn how building soil health creates drought resilience, natural pest control, and a profitable foundation for sustainable farming.",
      mainImage: "/realblog/2 MAIN.png",
      thumbnailImage: "/realblog/2.webp",
      video: "/realblog/2.mp4",
      date: "November 29, 2025",
      readTime: "10 min read",
      category: "Agroforestry",
      author: "Agrikrishi Farms Team",
      isFeatured: false
    },
    {
      id: 3,
      slug: 'traditional-vs-horticulture-farming',
      title: "Is a 1-Acre Garden Worth More Than a 100-Acre Field?",
      excerpt: "Discover the shocking truth about yield and value comparison between traditional farming and horticulture. Learn how a 1-acre garden can produce 10-100x more food than a traditional field and why value is starting to win over volume.",
      mainImage: "/realblog/3 MAIN.JPG",
      additionalImage: "/realblog/3plant.jpg",
      video: "/realblog/3.mp4",
      date: "November 29, 2025",
      readTime: "12 min read",
      category: "Farming Methods",
      author: "Agrikrishi Farms Team",
      isFeatured: false
    }
  ]

  const featuredBlog = blogs.find(blog => blog.isFeatured) || blogs[0]
  const regularBlogs = blogs.filter(blog => !blog.isFeatured)

  const popularPosts = blogs.slice(0, 3)

  const latestUpdates = [
    {
      id: 1,
      title: "Litchi: Coming Soon to Agrikrishi Farms!",
      snippet: "Get ready to experience the sweet, juicy delight of our premium litchi plants, meticulously cultivated for your Orchards.",
      image: "/blog/LitchiSoon.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    },
    {
      id: 2,
      title: "Agrikrishi Farms Farm Security Offer",
      snippet: "Protect your valuable plantation. Get a free electric jhatka machine on every purchase of 1000 plants or more from Agrikrishi Farms.",
      image: "/blog/Electric Jhatka Post.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    },
    {
      id: 3,
      title: "Agrikrishi Farms Care Offer: Free Electric Sprayer Tank!",
      snippet: "Keep your plants healthy. Get a free electric sprayer tank on every purchase of 500 plants or more from Agrikrishi Farms.",
      image: "/blog/Electric Sprayer Post.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 font-serif">
            Blogs & Updates
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-6">
            Stay informed with the latest insights on horticulture, agroforestry, and sustainable farming practices
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-6 py-3 font-semibold text-base md:text-lg transition-colors border-b-2 ${
                activeTab === 'blogs'
                  ? 'text-[#81ba00] border-[#81ba00]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveTab('updates')}
              className={`px-6 py-3 font-semibold text-base md:text-lg transition-colors border-b-2 ${
                activeTab === 'updates'
                  ? 'text-[#81ba00] border-[#81ba00]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Latest Updates
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Blogs Content */}
              {activeTab === 'blogs' && (
                <>
              {/* Featured Article */}
              <Link href={`/blogs/${featuredBlog.slug}`} className="group block mb-8 md:mb-12">
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
                    <img
                      src={featuredBlog.mainImage}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span className="bg-[#81ba00] text-white px-2 md:px-3 py-1 md:py-1.5 rounded text-xs font-semibold uppercase">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{featuredBlog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                      <span className="text-[#81ba00] font-medium">{featuredBlog.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 font-serif group-hover:text-[#81ba00] transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                  </div>
                </article>
              </Link>

              {/* Regular Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {regularBlogs.map((blog) => (
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    key={blog.id}
                    className="group"
                  >
                    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <img
                          src={blog.mainImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-gray-500 mb-2 md:mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </span>
                        </div>
                        <span className="inline-block text-[#81ba00] text-xs font-semibold uppercase mb-2">
                          {blog.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 font-serif group-hover:text-[#81ba00] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-1 md:gap-2 pt-6 md:pt-8 overflow-x-auto">
                <button className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap" disabled>
                  Previous
                </button>
                <button className="px-3 md:px-4 py-2 bg-[#81ba00] text-white rounded text-xs md:text-sm font-semibold">
                  1
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-gray-300 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap">
                  Next
                </button>
              </div>
              </>
              )}

              {/* Latest Updates Content */}
              {activeTab === 'updates' && (
                <div className="space-y-6 md:space-y-8">
                  {latestUpdates.map((update) => (
                    <div
                      key={update.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <img
                            src={update.image}
                            alt={update.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-between">
                          <div>
                            {/* Date Block */}
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl font-bold text-gray-300 leading-none">
                                {update.date}
                              </span>
                              <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                                {update.month}
                              </span>
                              <span className="text-xs text-gray-500">
                                {update.comments}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-serif">
                              {update.title}
                            </h3>
                            
                            {/* Snippet */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                              {update.snippet}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar - Right Side - On top for mobile */}
            {activeTab === 'blogs' && (
            <aside className="w-full lg:w-80 flex-shrink-0 space-y-4 md:space-y-6 order-1 lg:order-2">
              {/* Search Widget */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 font-serif flex items-center gap-2">
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-[#81ba00]" />
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81ba00] focus:border-transparent text-sm md:text-base"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                </div>
              </div>

              {/* Popular Posts Widget */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4 font-serif flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#81ba00]" />
                  Popular Posts
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {popularPosts.map((blog, index) => (
                    <li key={blog.id}>
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="group flex gap-2 md:gap-3 hover:opacity-80 transition-opacity"
                      >
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden">
                          <img
                            src={blog.mainImage}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#81ba00] transition-colors">
                            {blog.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
