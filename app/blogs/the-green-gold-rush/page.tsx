'use client'

import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Calendar, Clock, Share2, Play, TrendingUp, Tag } from 'lucide-react'
import { useState } from 'react'

export default function BlogPostPage() {
  const blog = {
    id: 1,
    slug: 'the-green-gold-rush',
    title: "The Green Gold Rush: How Horticulture & Agroforestry Decrease Carbon Consumption and Attract Smart Investment",
    mainImage: "/realblog/1 MAIN.webp",
    video: "/realblog/1.mp4",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Horticulture",
    author: "Oksingreen Team",
    content: {
      introduction: "For decades, the conversation around farming has been about yield. How much can we grow? How fast? But today, a new, more urgent question has taken center stage: How can we grow sustainably? The pressure is on. Consumers are demanding eco-friendly products, regulations are tightening around emissions, and our climate is sending clear distress signals. Traditional agriculture, with its heavy reliance on tilling, monocropping, and synthetic fertilizers, is a significant part of the global carbon problem. But what if the solution wasn't just to reduce agriculture's carbon footprint, but to reverse it? Enter horticulture and agroforestry. These aren't just farming methods; they are powerful carbon-capture technologies disguised as farms. And for savvy farmers and forward-thinking investors, they represent one of the biggest economic opportunities of the 21st century.",
      sections: [
        {
          heading: "How Farming Can Actually Decrease Carbon",
          id: "how-farming-decrease-carbon",
          paragraphs: [
            "The core problem with \"carbon consumption\" (or more accurately, carbon emissions) is that we're releasing ancient, stored carbon (like oil and gas) into the atmosphere. The solution? Get that carbon back into the ground.",
            "This is exactly what horticulture and agroforestry are designed to do.",
            "Agroforestry (Farming with Trees): This is the practice of integrating trees and shrubs with crops or livestock. Instead of a bare field of corn, imagine rows of corn planted between rows of pecan trees or pepper vines growing up fruit trees.",
            "Carbon Capture: Trees are the original carbon-sucking machines. They breathe in CO2 and lock it away in their wood (biomass) and, crucially, pump liquid carbon deep into the soil to feed microbes. This creates rich, stable soil carbon that can stay locked away for centuries.",
            "Reduced Emissions: The tree canopy creates a microclimate, reducing water evaporation (less irrigation) and protecting crops from wind. Their deep roots and leaf litter naturally fertilize the soil, drastically reducing the need for carbon-intensive synthetic fertilizers.",
            "Horticulture (Intensive, High-Value Crops): Think of orchards, vineyards, and market gardens. Many horticultural crops (like fruit trees, nut trees, and berry bushes) are perennials.",
            "No-Till Nature: Unlike annual crops (wheat, soy, corn) that require the land to be tilled every year—releasing stored carbon back into the air—perennial systems keep the soil covered and undisturbed.",
            "Carbon Sinking: These plants build carbon-rich soil year after year. A mature apple orchard is a significant carbon sink, storing tons of carbon in its trees and the complex root system below ground.",
            "These methods don't just slow down emissions; they actively sequester atmospheric carbon, turning farms from carbon sources into carbon sinks."
          ]
        },
        {
          heading: "The Opportunity for Farmers: Profitability Meets Resilience",
          id: "opportunity-for-farmers",
          paragraphs: [
            "For farmers, shifting to these practices isn't just about \"doing the right thing\"—it's a brilliant business decision.",
            "1. Diversified Income Streams: This is the #1 advantage. An agroforestry farmer isn't just selling one crop. They might be selling cash crops (vegetables) in the short term, fruit or nuts in the medium term, and high-value timber in the long term. This buffers them from market crashes in any single commodity.",
            "2. The New Cash Crop: Carbon Credits: This is the game-changer. By proving their farm is sequestering carbon, farmers can sell \"carbon credits\" on the open market to companies looking to offset their own emissions. Suddenly, you're getting paid just to farm sustainably.",
            "3. Climate-Proofing the Farm: Trees act as windbreaks, prevent soil erosion, and provide shade that lowers ground temperatures and retains moisture. In a world of increasing droughts and \"freak\" storms, an agroforestry system is simply more resilient and less risky than a massive, exposed monocrop field.",
            "4. Lower Costs, Higher Quality: Healthy, carbon-rich soil is alive. It holds water, fights off pests, and provides nutrients. This means farmers spend far less on irrigation, pesticides, and expensive fertilizers."
          ]
        },
        {
          heading: "The Opportunity for Investors: The Ultimate ESG Asset",
          id: "opportunity-for-investors",
          paragraphs: [
            "For investors, the search is on for \"green\" investments that aren't just PR. You want tangible, impactful, and profitable assets. Horticulture and agroforestry tick every box.",
            "1. Direct ESG Impact: This is the \"E\" (Environmental) in ESG investing at its finest. You are directly funding the removal of CO2 from the atmosphere. It's measurable, verifiable, and builds a story that shareholders and customers love.",
            "2. Access to the Exploding Carbon Market: The voluntary carbon market is projected to be worth $50 billion by 2030. By investing in these farms, you are essentially investing in a carbon-capture \"factory.\" The carbon credits generated by your portfolio of farms become a new, tradable asset class with enormous upside.",
            "3. Long-Term, Stable Returns: This isn't a volatile tech stock. It's an investment in the two things people will always need: food and a stable climate. The assets are real (land, timber, crops), and the demand is permanent.",
            "4. De-risking the Global Supply Chain: The modern food system is brittle. Climate shocks and geopolitical instability can disrupt it overnight. Investing in resilient, localized, and sustainable farming (like high-value horticulture) is a strategic move to secure the food supply chain itself."
          ]
        }
      ],
      conclusion: "The old model of agriculture is running on fumes. It degrades soil, consumes massive amounts of fossil fuels, and is dangerously vulnerable to the climate it helped to change. Horticulture and agroforestry are the future. They are a \"shovel-ready\" technology that builds soil, cleans the air, produces high-value food, and creates resilient communities. For farmers, it's a chance to become more profitable and secure. For investors, it's a chance to fund a real, scalable solution to our carbon problem—and reap the financial rewards of doing so. The green gold rush is here. It's not in a mine or a microchip; it's in the soil beneath our feet."
    }
  }

  const relatedPosts = [
    {
      id: 2,
      slug: 'beyond-the-harvest',
      title: "Beyond the Harvest: Why Healthy Soil is Horticulture's Greatest Long-Term Asset",
      mainImage: "/realblog/2 MAIN.png",
      date: "February 20, 2024",
      readTime: "10 min read"
    },
    {
      id: 3,
      slug: 'traditional-vs-horticulture-farming',
      title: "Is a 1-Acre Garden Worth More Than a 100-Acre Field?",
      mainImage: "/realblog/3 MAIN.JPG",
      date: "March 10, 2024",
      readTime: "12 min read"
    }
  ]

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />
      
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#81ba00] hover:text-green-700 mb-6 transition-colors"
          >
            <span>← Back to Blogs</span>
          </Link>
          
          <div className="mb-4">
            <span className="inline-block bg-[#81ba00] text-white px-4 py-1.5 rounded text-sm font-semibold uppercase">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{blog.readTime}</span>
            </div>
            <div>
              <span>By {blog.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1 bg-white rounded-lg shadow-md p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  {blog.content.introduction.split('. ').slice(0, 2).join('. ')}.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {blog.content.introduction.split('. ').slice(2).join('. ')}.
                </p>
              </div>

              {/* Video Section */}
              {blog.video && (
                <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                  {!isVideoPlaying ? (
                    <div className="relative aspect-video bg-gray-900 group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                      <img
                        src={blog.mainImage}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                          <Play className="w-10 h-10 text-[#81ba00] ml-1" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <video
                      src={blog.video}
                      controls
                      autoPlay
                      className="w-full aspect-video"
                      onPause={() => setIsVideoPlaying(false)}
                      onEnded={() => setIsVideoPlaying(false)}
                    />
                  )}
                </div>
              )}

              {/* Content Sections */}
              {blog.content.sections.map((section: any, index: number) => (
                <div key={index} id={section.id} className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif text-[#81ba00]">
                    {section.heading}
                  </h2>
                  <div className="space-y-6">
                    {section.paragraphs.map((paragraph: string, pIndex: number) => {
                      // Check if it's a numbered list item
                      if (paragraph.match(/^\d+\.\s/)) {
                        return (
                          <div key={pIndex} className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#81ba00] text-white flex items-center justify-center font-bold text-sm">
                                {paragraph.match(/^(\d+)/)?.[1]}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 leading-relaxed">
                                {paragraph.replace(/^\d+\.\s/, '')}
                              </p>
                            </div>
                          </div>
                        )
                      }
                      // Check if it's a sub-heading
                      if (paragraph.match(/^[A-Z][^:]+:/) && paragraph.length < 100) {
                        return (
                          <h3 key={pIndex} className="text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-3 font-serif">
                            {paragraph}
                          </h3>
                        )
                      }
                      // Regular paragraph
                      return (
                        <p
                          key={pIndex}
                          className="text-gray-700 leading-relaxed text-base md:text-lg"
                        >
                          {paragraph}
                        </p>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-[#81ba00]/5 rounded-lg border-l-4 border-[#81ba00]">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif">
                  The Future is Growing
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {blog.content.conclusion}
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div>
                    <p className="text-gray-600 mb-3 font-semibold">Share this article</p>
                    <div className="flex items-center gap-3">
                      <button className="p-3 bg-gray-100 rounded-full hover:bg-[#81ba00] hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Table of Contents</h3>
                <ul className="space-y-2">
                  {blog.content.sections.map((section: any) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-[#81ba00] transition-colors text-sm block py-2"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#81ba00]" />
                  Related Posts
                </h3>
                <ul className="space-y-4">
                  {relatedPosts.map((post) => (
                    <li key={post.id}>
                      <Link 
                        href={`/blogs/${post.slug}`}
                        className="group flex gap-3 hover:opacity-80 transition-opacity"
                      >
                        <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                          <img
                            src={post.mainImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#81ba00] transition-colors">
                            {post.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#81ba00]" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blogs?category=Horticulture" className="text-gray-600 hover:text-[#81ba00] transition-colors text-sm block py-2">
                      Horticulture
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs?category=Agroforestry" className="text-gray-600 hover:text-[#81ba00] transition-colors text-sm block py-2">
                      Agroforestry
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs?category=Farming Methods" className="text-gray-600 hover:text-[#81ba00] transition-colors text-sm block py-2">
                      Farming Methods
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#81ba00] flex items-center justify-center text-white text-2xl font-bold">
                OT
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{blog.author}</h3>
              <p className="text-gray-600 leading-relaxed">
                Oksingreen Team is dedicated to providing expert insights on horticulture, agroforestry, and sustainable farming practices. Our mission is to empower farmers and investors with knowledge that drives profitability and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
