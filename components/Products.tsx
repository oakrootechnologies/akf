'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

const products = [
  { name: 'African Mahogany', image: '/images/products/african-mahogany.jpg', price: '$299' },
  { name: 'Guava', image: '/images/products/guava.jpg', price: '$49' },
  { name: 'Lemon', image: '/images/products/lemon.jpg', price: '$39' },
  { name: 'Orange', image: '/images/products/orange.jpg', price: '$59' },
  { name: 'Mango', image: '/images/products/chiku.jpg', price: '$79' },
  { name: 'Fig', image: '/images/products/fig.jpg', price: '$69' },
  { name: 'Pomegranate', image: '/images/products/pomegranate.jpg', price: '$89' },
  { name: 'Dragon Fruit', image: '/images/products/dragon-fruit.jpg', price: '$99' },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium plants and trees
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price}
                    </span>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}



