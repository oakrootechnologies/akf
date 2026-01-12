'use client'

import { useState } from 'react'
import { Image as ImageIcon, X } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

const galleryImages = [
  {
    id: 1,
    src: '/Website Images/guava(Hero)/Hero.jpg',
    title: 'Guava Plantation',
    category: 'Horticulture',
  },
  {
    id: 2,
    src: '/Website Images/Orange/orange1.jpg',
    title: 'Orange Trees',
    category: 'Horticulture',
  },
  {
    id: 3,
    src: '/Website Images/Dragon Fruit(Hero)/Hero.jpg',
    title: 'Dragon Fruit Farm',
    category: 'Horticulture',
  },
  {
    id: 4,
    src: '/Website Images/Pomegranate/IMG-20230121-WA0004.jpg',
    title: 'Pomegranate Garden',
    category: 'Horticulture',
  },
  {
    id: 5,
    src: '/Website Images/Mahogany/IMG-20221214-WA0002.jpg',
    title: 'African Mahogany',
    category: 'Agroforestry',
  },
  {
    id: 6,
    src: '/Website Images/Sandalwood(Hero)/Red sandalwood (Hero).jpeg',
    title: 'Red Sandalwood',
    category: 'Agroforestry',
  },
  {
    id: 7,
    src: '/Website Images/chiku (Hero)/Hero.jpg',
    title: 'Chiku Plantation',
    category: 'Horticulture',
  },
  {
    id: 8,
    src: '/Website Images/lemon(Hero)/Hero.png',
    title: 'Lemon Grove',
    category: 'Horticulture',
  },
  {
    id: 9,
    src: '/Website Images/Fig/arawaliphotography_1706117948354770.jpg',
    title: 'Fig Trees',
    category: 'Horticulture',
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Horticulture', 'Agroforestry']
  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-4 rounded-full">
              <ImageIcon className="w-12 h-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Explore our beautiful plantations and farms
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages.find((img) => img.id === selectedImage)?.src}
            alt={galleryImages.find((img) => img.id === selectedImage)?.title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  )
}

