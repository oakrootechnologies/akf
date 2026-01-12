'use client'

import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function AboutPage() {
  const reviews = [
    {
      id: 1,
      text: "Agrikrishi Farms provides the highest quality saplings. Our yield has doubled since we started using their plants. The support team is always available to help with any questions.",
      author: "Rajesh Kumar",
      rating: 5
    },
    {
      id: 2,
      text: "Excellent service and premium quality plants. The agroforestry trees we purchased are growing beautifully. Agrikrishi Farms has become our trusted partner for all our agricultural needs.",
      author: "Priya Sharma",
      rating: 5
    },
    {
      id: 3,
      text: "The Mahogany saplings I bought from Agrikrishi Farms are thriving exceptionally well. Their expert guidance on plantation techniques has been invaluable. Highly recommended for serious farmers.",
      author: "Amit Patel",
      rating: 5
    },
    {
      id: 4,
      text: "Outstanding quality and customer service! The fruit trees we planted are already showing promising growth. Agrikrishi Farms's commitment to quality is evident in every plant they deliver.",
      author: "Sunita Devi",
      rating: 5
    },
    {
      id: 5,
      text: "As a commercial orchard owner, I've tried many suppliers, but Agrikrishi Farms stands out. Their hybrid varieties are superior, and the post-purchase support is exceptional. Worth every rupee!",
      author: "Vikram Singh",
      rating: 5
    },
    {
      id: 6,
      text: "The Sandalwood plants from Agrikrishi Farms are of premium quality. Their team provided detailed care instructions and continues to support us. This is a company that truly cares about farmers' success.",
      author: "Meera Reddy",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <NavbarMain />
      
      {/* Section 1: Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        {/* Background Image with blur and bottom crop */}
        <div 
          className="absolute inset-0 -bottom-[20%]"
          style={{
            backgroundImage: "url('/about us/main bg slightly blurred.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            transform: 'scale(1.05)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Title */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white font-bold text-5xl md:text-6xl font-mohr-rounded">
            About Us
          </h1>
        </div>
      </section>

      {/* Section 2: Welcome Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column (Image Block) */}
            <div className="relative">
              {/* Image */}
                <img 
                src="/realblog/3 MAIN.JPG" 
                  alt="Who We Are - Agrikrishi Farms Premium Plants and Fruits" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
                />
            </div>

            {/* Right Column (Text Block) */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-mohr-rounded">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  At Agrikrishi Farms, we stand at the intersection where tradition meets technology. We believe that true agricultural prosperity begins with the right foundation: the seed.
                </p>
                <p>
                  We are more than just a plant supplier; we are partners in your growth story. We recognize that for the modern Indian farmer, horticulture and agroforestry are not just about planting trees—they are about building assets, securing wealth, and preserving our environment for the next generation.
                </p>
                <p>
                  Our mission is simple but ambitious: to bridge the gap between subsistence farming and commercial success. We achieve this by providing elite, scientifically-developed hybrid saplings engineered for high yield, rapid growth, and climate resilience. From high-value timber like Mahogany and Sandalwood to premium fruit varieties, every plant in our inventory is a promise of quality.
                </p>
                <p>
                  But our commitment goes beyond the soil. We empower our community with expert agronomy guidance, unwavering support, and a shared vision for a greener, wealthier India. When you plant with Agrikrishi Farms, you aren&apos;t just growing a crop; you are growing a legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vision and Mission */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/about us/BgOurvision.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Our Vision */}
            <div className="relative">
              {/* White Content Card */}
              <div className="bg-white rounded-lg p-6 md:p-8 relative z-10 pt-12 md:pt-14">
                {/* Green Banner Header - Overlapping top */}
                <div className="bg-[#81ba00] rounded-lg px-4 py-2 absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-auto min-w-[140px]">
                  <h3 className="text-white font-bold text-base md:text-lg font-sans text-center whitespace-nowrap">
                    Our Vision
                  </h3>
        </div>

                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-sans">
                  To create a future where every acre of Indian land is a source of sustainable wealth and eco-logical balance. We envision a transformed agricultural land-scape where advanced horti-culture empowers farmers to achieve financial prosperity while healing the planet & want to be the driving force behind a greener, wealthier India.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="relative">
              {/* White Content Card */}
              <div className="bg-white rounded-lg p-6 md:p-8 relative z-10 pt-12 md:pt-14">
                {/* Green Banner Header - Overlapping top */}
                <div className="bg-[#81ba00] rounded-lg px-4 py-2 absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-auto min-w-[140px]">
                  <h3 className="text-white font-bold text-base md:text-lg font-sans text-center whitespace-nowrap">
                    Our Mission
                  </h3>
                </div>
                
                <p className="text-gray-900 text-base md:text-lg leading-relaxed font-sans">
                  To transform Indian agricul-ture through innovation in hybrid horticulture and sus-tainable agroforestry.bridge the gap between farming and wealth creation. We aim to empower farmers with scientifically developed, high-value plants that deliv-er both financial stability and environmental restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Customer Reviews */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Title */}
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-16">
            What Our Partners Say
          </h2>

          {/* Reviews Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              navigation={{
                nextEl: '.reviews-next',
                prevEl: '.reviews-prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="reviews-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white rounded-xl shadow-lg p-8 relative h-full">
              {/* Top Quote Icon */}
                    <Quote 
                      className="absolute top-4 left-4 text-6xl z-0" 
                      style={{ color: '#81ba00' }}
                    />
              
              {/* Bottom Quote Icon */}
                    <Quote 
                      className="absolute bottom-4 right-4 text-6xl z-0" 
                      style={{ color: '#81ba00' }}
                    />
              
              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Review Text */}
                <p className="text-gray-700 text-lg mb-4">
                        {review.text}
                </p>
                
                {/* Author */}
                <h3 className="mt-4 font-bold text-green-700">
                        - {review.author}
                </h3>
                
                {/* Star Rating */}
                <div className="flex mt-2 text-yellow-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                </div>
              </div>
            </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button className="reviews-prev text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                <span>←</span>
                <span className="uppercase font-medium relative">
                  PREV
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                </span>
              </button>
              <button className="reviews-next text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                <span className="uppercase font-medium relative">
                  NEXT
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .reviews-swiper .swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
        `}</style>
      </section>

      <Footer />
    </main>
  )
}
