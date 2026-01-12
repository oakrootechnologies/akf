'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

const faqs = [
  {
    question: 'What types of plants do you offer?',
    answer: 'We offer a wide variety of horticulture plants including fruit trees, ornamental plants, and agroforestry trees. Our collection includes guava, orange, dragon fruit, pomegranate, fig, chiku, lemon, and many more.',
  },
  {
    question: 'How do I place an order?',
    answer: 'You can browse our products, add them to your cart, and proceed to checkout. You\'ll need to provide your shipping address and complete the payment process.',
  },
  {
    question: 'What is your shipping policy?',
    answer: 'We offer shipping across India. Shipping times vary depending on your location. You can track your order using the order ID provided after purchase.',
  },
  {
    question: 'How do I track my order?',
    answer: 'After placing an order, you\'ll receive an order ID. Visit our Track Order page and enter your order ID to see the current status and tracking information.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit cards, debit cards, UPI, and net banking. All transactions are secure and encrypted.',
  },
  {
    question: 'Do you provide planting guidance?',
    answer: 'Yes! We offer technical supervision and guidance for all our products. Our team can help you with planting techniques, care instructions, and best practices.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer easy returns within 7 days of delivery if the product is damaged or not as described. Please contact our support team for return requests.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach us through our Contact page, email us at info@agrikrishifarms.com, or call us at +123 456 7890. Our support team is available 24/7.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}

