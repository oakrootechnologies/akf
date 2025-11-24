'use client'

import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Calendar, Clock, Share2, Play, TrendingUp, Tag } from 'lucide-react'
import { useState } from 'react'

export default function BlogPostPage() {
  const blog = {
    id: 2,
    slug: 'beyond-the-harvest',
    title: "Beyond the Harvest: Why Healthy Soil is Horticulture's Greatest Long-Term Asset",
    mainImage: "/realblog/2 MAIN.png",
    thumbnailImage: "/realblog/2.webp",
    video: "/realblog/2.mp4",
    date: "February 20, 2024",
    readTime: "10 min read",
    category: "Agroforestry",
    author: "Oksingreen Team",
    content: {
      introduction: "We often think of soil as just... dirt. A simple, inert medium to prop up plants. But this is the single biggest misunderstanding in modern agriculture. Real, healthy soil is not dirt. It's a living, breathing, and complex ecosystem—a sprawling underground city teeming with billions of microbes, fungi, and invertebrates. In conventional farming, this ecosystem is often damaged by heavy tilling, monocropping, and chemical inputs. Horticulture, with its focus on intensive, high-value cultivation, offers a powerful set of tools to do the exact opposite: to build and enrich this \"living\" soil. The secret? Horticultural practices feed the soil, and in turn, the soil feeds the plants. This approach isn't just a feel-good story; it is the most critical investment a grower can make for long-term profitability and resilience.",
      sections: [
        {
          heading: "How Horticulture Builds a Living Soil",
          id: "how-horticulture-builds-soil",
          paragraphs: [
            "Unlike large-scale row cropping, horticulture (think market gardens, orchards, and vineyards) thrives on practices that see soil as a partner, not a resource to be mined.",
            "1. Feeding the Soil with Organic Matter:",
            "Composting: Horticulturalists are masters of compost. This \"black gold\" is more than fertilizer; it's a massive infusion of diverse microbial life and the stable organic matter (humus) they feed on.",
            "Mulching: Laying mulch (straw, wood chips, leaf mold) on the soil surface is a classic horticultural technique. It protects the soil from erosion, suppresses weeds, and—most importantly—slowly breaks down, providing a steady \"drip-feed\" of food for earthworms and fungi.",
            "2. Protecting the Soil with Cover:",
            "Cover Crops: You'll rarely see bare soil in a smart horticultural system. In the off-season, growers plant \"cover crops\" like vetch or clover. These plants blanket the soil, protecting it from wind and rain. Their roots break up compaction and feed the microbiome.",
            "Green Manures: When these cover crops are cut, they are often left on the surface or lightly tilled in as \"green manure,\" providing a fresh feast of nutrients for the next cash crop.",
            "3. Diversifying the \"Diet\" with Polyculture:",
            "Crop Rotation: This is a cornerstone of horticulture. A farmer will never plant tomatoes in the same spot year after year. They will rotate with beans (which add nitrogen), then leafy greens (which are light feeders), then root crops (which break up soil). This variety prevents nutrient depletion and stops soil-borne diseases from taking hold.",
            "Intercropping: Planting different crops together (like basil under tomatoes) creates a diverse root landscape, fostering a more complex and resilient soil food web.",
            "4. Minimizing Disturbance (The Perennial Advantage):",
            "Many high-value horticultural crops are perennials (fruit trees, nut trees, grape vines, berry bushes). These systems are the gold standard for soil health because the soil is never tilled. This allows a complex, undisturbed fungal network—known as mycorrhizal fungi—to flourish, acting as a massive root extension for the plants."
          ]
        },
        {
          heading: "The Long-Term Payoff: Why Healthy Soil Wins",
          id: "long-term-payoff",
          paragraphs: [
            "Building soil health is not a quick fix; it's a long-term strategy. But the benefits compound season after season, resulting in a farm that is more resilient, more profitable, and truly sustainable.",
            "The \"Soil Sponge\" Effect:",
            "Healthy soil, rich in organic matter (humus), acts like a giant sponge. For every 1% increase in soil organic matter, an acre of soil can hold an additional 20,000+ gallons of water. This means your crops stay hydrated longer during dry spells, and you spend far less on irrigation. It also dramatically reduces flooding and nutrient-polluted runoff during heavy rains.",
            "The \"Living Immune System\":",
            "A diverse soil microbiome is a natural defense force. A soil full of beneficial bacteria and fungi leaves no room for pathogens to take hold. They actively outcompete and even prey on the \"bad guys.\" This leads to healthier plants that require significantly fewer (or zero) expensive and harmful pesticides and fungicides.",
            "The \"Nutrient Bank\":",
            "The soil ecosystem is a master of recycling. The soil microbiome's job is to unlock nutrients. Fungi will mine for phosphorus and minerals deep in the soil and trade them to the plant. Bacteria will \"fix\" nitrogen from the air. Instead of buying synthetic, water-soluble fertilizers (which easily wash away), you are building a self-sufficient system that banks and cycles its own nutrients.",
            "The \"Profitability Engine\":",
            "All these benefits roll up into the most important one: economic viability. You spend less on water, fertilizer, and pesticides. Your yields become more stable and predictable, even in bad weather. And, crucially, your land itself becomes more valuable. A farm with 8% organic matter is a far more valuable and productive asset than a neighboring farm with 2% organic matter."
          ]
        }
      ],
      conclusion: "The old, extractive model of farming is running out of time. It's dependent on costly inputs and is highly vulnerable to a changing climate. Horticulture teaches us a better way. By focusing on building soil, we are not just growing crops; we are building a resilient, self-sufficient, and profitable foundation for a farm. It's an investment in a living bank account that pays compounding dividends for decades to come."
    }
  }

  const relatedPosts = [
    {
      id: 1,
      slug: 'the-green-gold-rush',
      title: "The Green Gold Rush: How Horticulture & Agroforestry Decrease Carbon Consumption",
      mainImage: "/realblog/1 MAIN.webp",
      date: "January 15, 2024",
      readTime: "8 min read"
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

              {/* Additional Image */}
              {blog.thumbnailImage && (
                <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={blog.thumbnailImage}
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
                  The Future is Below Our Feet
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
