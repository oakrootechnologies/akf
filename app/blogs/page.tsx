'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Calendar, Clock, Search, TrendingUp, Tag } from 'lucide-react'

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const blogs = [
    {
      id: 1,
      slug: 'the-green-gold-rush',
      title: "The Green Gold Rush: How Horticulture & Agroforestry Decrease Carbon Consumption and Attract Smart Investment",
      excerpt: "Discover how horticulture and agroforestry are transforming agriculture into a carbon-capture technology. Learn how these practices decrease carbon consumption, create profitable opportunities for farmers, and attract smart investment in the growing ESG market.",
      mainImage: "/realblog/1 MAIN.webp",
      video: "/realblog/1.mp4",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Horticulture",
      author: "Oksingreen Team",
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
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Agroforestry",
      author: "Oksingreen Team",
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
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Farming Methods",
      author: "Oksingreen Team",
      isFeatured: false
    }
  ]

  const featuredBlog = blogs.find(blog => blog.isFeatured) || blogs[0]
  const regularBlogs = blogs.filter(blog => !blog.isFeatured)

  const categories = ["Horticulture", "Agroforestry", "Farming Methods", "Sustainability", "Investment"]
  const popularPosts = blogs.slice(0, 3)

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-serif">
            Blogs & Updates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Stay informed with the latest insights on horticulture, agroforestry, and sustainable farming practices
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1">
              {/* Featured Article */}
              <Link href={`/blogs/${featuredBlog.slug}`} className="group block mb-12">
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img
                      src={featuredBlog.mainImage}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#81ba00] text-white px-3 py-1.5 rounded text-xs font-semibold uppercase">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredBlog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                      <span className="text-[#81ba00] font-medium">{featuredBlog.category}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif group-hover:text-[#81ba00] transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                  </div>
                </article>
              </Link>

              {/* Regular Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {regularBlogs.map((blog) => (
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    key={blog.id}
                    className="group"
                  >
                    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={blog.mainImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-[#81ba00] transition-colors line-clamp-2">
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
              <div className="flex justify-center items-center gap-2 pt-8">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#81ba00] text-white rounded font-semibold">
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
              {/* Search Widget */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#81ba00]" />
                  Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81ba00] focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#81ba00]" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        href={`#${category.toLowerCase()}`}
                        className="flex items-center justify-between text-gray-700 hover:text-[#81ba00] transition-colors py-2 border-b border-gray-100 last:border-0"
                      >
                        <span>{category}</span>
                        <span className="text-gray-400 text-sm">({blogs.filter(b => b.category === category).length})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts Widget */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#81ba00]" />
                  Popular Posts
                </h3>
                <ul className="space-y-4">
                  {popularPosts.map((blog, index) => (
                    <li key={blog.id}>
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="group flex gap-3 hover:opacity-80 transition-opacity"
                      >
                        <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                          <img
                            src={blog.mainImage}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#81ba00] transition-colors">
                            {blog.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">
                  Recent Posts
                </h3>
                <ul className="space-y-3">
                  {blogs.map((blog) => (
                    <li key={blog.id}>
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="text-gray-700 hover:text-[#81ba00] transition-colors text-sm flex items-start gap-2"
                      >
                        <span className="text-[#81ba00] mt-1">•</span>
                        <span className="line-clamp-2">{blog.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
