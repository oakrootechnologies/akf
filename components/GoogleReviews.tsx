'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react'

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
    <section className="py-20 relative overflow-hidden">
      {/* Leafy background across the whole section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')"
        }}
      />
      <div className="absolute inset-0 bg-emerald-900/40" />
      <div className="w-full max-w-[1032px] mx-auto px-4 rounded-lg p-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-gray-700 font-medium">
            Follow the most popular trends and get exclusive items from Oksingreen
          </h2>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Column 1: Google Business Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              {/* Business Photo */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/100x100/CCC/333?text=Oksingreen"
                  alt="Oksingreen Business"
                  className="w-full h-full object-cover"
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
              <button className="reviews-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="reviews-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .reviews-swiper {
          padding: 0 60px;
        }
        
        .reviews-swiper .swiper-slide {
          height: auto;
        }
        
        .reviews-button-prev,
        .reviews-button-next {
          color: #374151;
        }
        
        .reviews-button-prev:hover,
        .reviews-button-next:hover {
          color: #22c55e;
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
