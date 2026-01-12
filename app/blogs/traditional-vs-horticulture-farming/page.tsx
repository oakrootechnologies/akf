'use client'

import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Calendar, Clock, Share2, Play } from 'lucide-react'
import { useState } from 'react'

export default function BlogPostPage() {
  const blog = {
    id: 3,
    slug: 'traditional-vs-horticulture-farming',
    title: "Is a 1-Acre Garden Worth More Than a 100-Acre Field?",
    mainImage: "/realblog/3 MAIN.JPG",
    additionalImage: "/realblog/3plant.jpg",
    video: "/realblog/3.mp4",
    date: "November 29, 2025",
    readTime: "12 min read",
    category: "Farming Methods",
    author: "Agrikrishi Farms Team",
    content: {
      introduction: "You've seen them both. On one side, a massive, sprawling field of wheat or corn stretching as far as the eye can see, harvested by giant combines. On the other, a vibrant, compact plot—maybe a greenhouse or an orchard—bustling with workers tending to tomatoes, berries, or flowers. One is Traditional Farming (Agriculture). The other is Horticulture. They both grow things, but that's where the similarity ends. When you compare them on yield and cost, the results might shock you. One is about scale, the other is about value. And in the modern economy, value is starting to win.",
      sections: [
        {
          heading: "Agriculture vs. Horticulture: What's the Difference?",
          id: "agriculture-vs-horticulture",
          paragraphs: [
            "Think of it like this: Agriculture is the bulk industry. Horticulture is the boutique craft.",
            "Horticulture (The \"Garden\"):",
            "• Main Crops: Fruits, vegetables, flowers, nuts, herbs (high-value, perishable)",
            "• Scale: Small, intensive. A few acres, a greenhouse, or an orchard",
            "• Goal: High value per acre. Quality over quantity",
            "• Method: Labor-intensive (pruning, grafting, hand-picking)",
            "Traditional Farming (The \"Field\"):",
            "• Main Crops: Staple grains, corn, soy, cotton, livestock (lower-value, storable)",
            "• Scale: Large, extensive. Hundreds or thousands of acres",
            "• Goal: High volume per farm. Quantity over quality",
            "• Method: Machine-intensive (tractors, combines, drones)"
          ]
        },
        {
          heading: "The Cost: Big Machines vs. Skilled Hands",
          id: "cost-comparison",
          paragraphs: [
            "The price of entry for each is completely different.",
            "Traditional Farming has massive upfront costs in land and machinery. A new combine harvester can cost over $500,000. Its biggest ongoing costs are diesel fuel, bulk synthetic fertilizers, and pesticides for a huge area.",
            "Horticulture has a much lower cost for land (since you need less) but a much higher cost for labor. It requires skilled workers for pruning, pest management, and harvesting. If you build a high-tech greenhouse, the initial cost per acre can be very high, but it comes with a major tradeoff..."
          ]
        },
        {
          heading: "The Yield: This Is Where Everything Changes",
          id: "yield-comparison",
          paragraphs: [
            "Here is the most mind-blowing part of the comparison.",
            "Horticulture doesn't just produce more value per acre. It produces more food per acre.",
            "Because horticultural methods are intensive and often use controlled environments (like greenhouses or vertical farms), they are incredibly efficient.",
            "A traditional, open-field farm is at the mercy of seasons, weather, and pests. It gets one, maybe two, harvests per year.",
            "A horticultural greenhouse farm can grow 365 days a year. It can control the exact light, water, and nutrients. It can stack plants vertically.",
            "The result? A high-tech greenhouse or vertical farm can produce 10, 20, or even 100 times more food per acre than a traditional field.",
            "That's not a typo. 10x to 100x more yield."
          ]
        },
        {
          heading: "The Verdict: Which is \"Better\"?",
          id: "verdict",
          paragraphs: [
            "It's not about one being \"better\"—it's about \"better for what.\"",
            "Traditional Farming is (and will be) essential for feeding the world its core calories. We need massive, efficient farms to produce the billions of tons of wheat, corn, and soy that are the bedrock of the global food system. Its profit margin is thin, but it makes up for it in massive volume.",
            "Horticulture is the future of high-quality, local food. It produces the high-value, nutritious produce that consumers demand (berries, salad greens, tomatoes). Its profit margin is high, it uses far less water, and it can be done anywhere—even on a rooftop in a city.",
            "For the modern entrepreneur, farmer, or investor, the lesson is clear: Don't just look at the size of the land. Look at the value you can grow on it."
          ]
        }
      ],
      conclusion: "The comparison between traditional farming and horticulture reveals a fundamental shift in agricultural economics. While traditional farming remains essential for global food security, horticulture offers unprecedented opportunities for value creation. The question isn't whether one is better than the other—it's about understanding which approach aligns with your goals, resources, and market opportunities. In an era where value trumps volume, a well-managed 1-acre garden can indeed be worth more than a 100-acre field."
    }
  }

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

              {/* Additional Image */}
              {blog.additionalImage && (
                <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={blog.additionalImage}
                    alt={blog.title}
                    className="w-full h-auto"
                    loading="lazy"
                  />
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
                      // Check if it's a bullet point
                      if (paragraph.startsWith('•')) {
                        return (
                          <div key={pIndex} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 mt-2">
                              <div className="w-2 h-2 rounded-full bg-[#81ba00]"></div>
                            </div>
                            <p className="text-gray-700 leading-relaxed flex-1">
                              <span className="font-semibold">{paragraph.replace('•', '').split(':')[0]}:</span>
                              {paragraph.includes(':') && (
                                <span className="ml-2">{paragraph.split(':').slice(1).join(':')}</span>
                              )}
                            </p>
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
                  The Verdict
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
                Agrikrishi Farms Team is dedicated to providing expert insights on horticulture, agroforestry, and sustainable farming practices. Our mission is to empower farmers and investors with knowledge that drives profitability and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
