'use client'

import { Star, Quote } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Punjab',
    rating: 5,
    text: 'Excellent quality plants! The guava trees I purchased are growing beautifully. The technical guidance provided was very helpful.',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Priya Sharma',
    location: 'Maharashtra',
    rating: 5,
    text: 'Amazing service and fast delivery. My dragon fruit plants arrived in perfect condition. Highly recommend Agrikrishi Farms!',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Amit Patel',
    location: 'Gujarat',
    rating: 5,
    text: 'Great experience! The agroforestry trees are exactly as described. The team provided excellent support throughout.',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Sunita Devi',
    location: 'Bihar',
    rating: 5,
    text: 'Best place to buy plants online. Quality is top-notch and the customer service is outstanding. Will definitely order again!',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Vikram Singh',
    location: 'Rajasthan',
    rating: 5,
    text: 'The pomegranate plants are thriving! Great quality and the planting guidance was very detailed. Thank you!',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Meera Nair',
    location: 'Kerala',
    rating: 5,
    text: 'Outstanding quality and service. The lemon trees are producing excellent fruits. Very satisfied with my purchase.',
    image: '/placeholder-avatar.jpg',
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-4 rounded-full">
              <Quote className="w-12 h-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600">
            Real feedback from satisfied customers across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-gray-600">Plants Delivered</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Plant Varieties</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the quality and service that our customers love
          </p>
          <a
            href="/products"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}

