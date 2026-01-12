'use client'

import { Leaf, TreePine, GraduationCap, Truck, Shield, Headphones } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

const services = [
  {
    icon: <Leaf className="w-12 h-12 text-primary-600" />,
    title: 'Horticulture Solutions',
    description: 'Comprehensive horticulture services including plant selection, cultivation guidance, and maintenance support for fruit trees and ornamental plants.',
    features: [
      'Premium quality plants',
      'Expert cultivation guidance',
      'Custom planting solutions',
      'Ongoing support',
    ],
  },
  {
    icon: <TreePine className="w-12 h-12 text-primary-600" />,
    title: 'Agroforestry Services',
    description: 'Specialized agroforestry solutions for sustainable farming, including timber trees, medicinal plants, and eco-friendly plantation management.',
    features: [
      'Sustainable farming practices',
      'Timber tree cultivation',
      'Medicinal plant varieties',
      'Long-term planning',
    ],
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-primary-600" />,
    title: 'Technical Guidance',
    description: 'Professional technical supervision and guidance from our expert team to ensure optimal growth and maximum yield from your plants.',
    features: [
      'Expert consultation',
      'Soil analysis',
      'Planting techniques',
      'Disease management',
    ],
  },
  {
    icon: <Truck className="w-12 h-12 text-primary-600" />,
    title: 'Nationwide Delivery',
    description: 'Fast and reliable delivery service across India with secure packaging to ensure your plants arrive in perfect condition.',
    features: [
      'Pan-India shipping',
      'Secure packaging',
      'Order tracking',
      'Quick delivery',
    ],
  },
  {
    icon: <Shield className="w-12 h-12 text-primary-600" />,
    title: 'Quality Assurance',
    description: 'We guarantee the quality of all our products with a comprehensive quality assurance process and customer satisfaction guarantee.',
    features: [
      'Quality guarantee',
      'Healthy plants',
      'Return policy',
      'Customer support',
    ],
  },
  {
    icon: <Headphones className="w-12 h-12 text-primary-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you with any queries, concerns, or technical assistance you may need.',
    features: [
      '24/7 availability',
      'Quick response',
      'Expert assistance',
      'Multiple channels',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your horticulture and agroforestry needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

