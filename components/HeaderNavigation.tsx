'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderNavigation() {
  const [showCategoriesMegaMenu, setShowCategoriesMegaMenu] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
            </li>
            
            <li className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Plants
              </button>
            </li>
            
            <li className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Products
              </button>
            </li>
            
            <li className="relative">
              <button
                onMouseEnter={() => setShowCategoriesMegaMenu(true)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Categories
              </button>
              
              {/* Mega Menu */}
              {showCategoriesMegaMenu && (
                <div
                  onMouseLeave={() => setShowCategoriesMegaMenu(false)}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white shadow-2xl border-t-4 border-primary-600 rounded-lg"
                >
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {/* Column 1: Indoor Plants */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Indoor Plants</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Monstera
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Fiddle Leaf Fig
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Snake Plant
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Peace Lily
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Pothos
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Agroforestry */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Agroforestry</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Fruit Trees
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Timber Species
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Ornamental Trees
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Medicinal Plants
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Bamboo
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Garden Tools */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Garden Tools</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Shovels & Spades
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Pruning Shears
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Watering Cans
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Planters & Pots
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                            Fertilizers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            
            <li>
              <Link href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                About Us
              </Link>
            </li>
            
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

