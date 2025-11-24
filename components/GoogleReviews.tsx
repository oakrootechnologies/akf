'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Star, CheckCircle } from 'lucide-react'

export default function GoogleReviews() {
  const mockReviews = [
    {
      id: 1,
      name: "Anmol Singh",
      date: "2025-07-25",
      rating: 5,
      text: "Best company... Go for it",
      avatar: "https://placehold.co/40x40/4F46E5/FFF?text=AS",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      date: "2025-07-20",
      rating: 5,
      text: "Excellent quality plants and great customer service. Highly recommended!",
      avatar: "https://placehold.co/40x40/EC4899/FFF?text=PS",
      verified: true
    },
    {
      id: 3,
      name: "Raj Kumar",
      date: "2025-07-18",
      rating: 4,
      text: "Good variety of plants. Delivery was fast and packaging was excellent.",
      avatar: "https://placehold.co/40x40/059669/FFF?text=RK",
      verified: false
    },
    {
      id: 4,
      name: "Sneha Patel",
      date: "2025-07-15",
      rating: 5,
      text: "Amazing collection of fruit trees. My garden looks beautiful now!",
      avatar: "https://placehold.co/40x40/DC2626/FFF?text=SP",
      verified: true
    },
    {
      id: 5,
      name: "Vikram Singh",
      date: "2025-07-12",
      rating: 5,
      text: "Professional service and healthy plants. Will definitely order again.",
      avatar: "https://placehold.co/40x40/7C3AED/FFF?text=VS",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  };

  return (
    <section className="py-32 md:py-40 lg:py-48 relative overflow-hidden">
      {/* Background Image with Gaussian Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Website Images/Review Section BG image(Gaussain Blur kr dena thoda).jpeg')",
          filter: 'blur(5.6px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="w-full px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
            Lets see what our customer says for our services
          </h2>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1238px] mx-auto pb-8">
          
          {/* Column 1: Google Business Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              {/* Business Photo */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-white p-2 flex items-center justify-center">
                <img
                  src="/logo/instaLOGO.png"
                  alt="Oksingreen Business"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Business Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oksingreen</h3>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-2">
                {renderStars(5)}
              </div>
              
              {/* Review Count */}
              <p className="text-sm text-gray-600 mb-4">12 Google reviews</p>
              
              {/* Write a Review Button */}
              <button 
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                onClick={() => window.open('https://g.page/r/your-google-business-review-link', '_blank')}
              >
                Write a review
              </button>
            </div>
          </div>

          {/* Column 2: Reviews Carousel */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                navigation={{
                  nextEl: '.reviews-button-next',
                  prevEl: '.reviews-button-prev',
                }}
                className="reviews-swiper"
              >
                {mockReviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="bg-white rounded-lg shadow-md p-6 h-full">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          
                          {/* Name & Date */}
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <p className="text-xs text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        
                        {/* Google Logo */}
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div>
                        {/* Star Rating & Verified Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex gap-1">
                            {renderStars(review.rating)}
                          </div>
                          {review.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        
                        {/* Review Text */}
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-6 mt-6">
                <button className="reviews-button-prev text-white hover:text-gray-200 transition-colors flex items-center gap-1 drop-shadow-lg">
                  <span>←</span>
                  <span className="uppercase font-medium relative">
                    PREV
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></span>
                  </span>
                </button>
                <button className="reviews-button-next text-white hover:text-gray-200 transition-colors flex items-center gap-1 drop-shadow-lg">
                  <span className="uppercase font-medium relative">
                    NEXT
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></span>
                  </span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .reviews-swiper {
          padding: 0;
        }
        
        .reviews-swiper .swiper-slide {
          height: auto;
        }
        
        .reviews-button-prev.swiper-button-disabled,
        .reviews-button-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}
