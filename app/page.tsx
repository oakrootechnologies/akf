import dynamic from 'next/dynamic'
import NavbarMain from '@/components/NavbarMain'
import HeroSlider from '@/components/HeroSlider'
import HeroProductsCarousel from '@/components/HeroProductsCarousel'
// Removed unused HeroProductsCarousel
import { client } from '@/lib/sanity.server'
import ShopProductCard from '@/components/shop/ShopProductCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Lazy load components below the fold for better initial load performance
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div className="min-h-[1000px]" />,
})

const GoogleReviews = dynamic(() => import('@/components/GoogleReviews'), {
  loading: () => <div className="min-h-[500px]" />,
})
const ReviewsOverlapCard = dynamic(() => import('@/components/ReviewsOverlapCard'), {
  loading: () => <div className="min-h-[400px]" />,
})
const VideoSection = dynamic(() => import('@/components/VideoSection'), {
  loading: () => <div className="min-h-[600px]" />,
})
const FloatingButtons = dynamic(() => import('@/components/FloatingButtons'), {
  ssr: false, // Don't render on server as it's interactive
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[300px]" />,
})

const FALLBACK_PRODUCTS = [
  {
    _id: 'fb-1',
    title: 'Red Sandalwood (Rakt Chandan)',
    slug: 'red-sandalwood',
    image: '/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg',
    hoverImages: ['/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg'],
    startingPrice: 150,
    isHybrid: false,
    cropType: 'Forestry'
  },
  {
    _id: 'fb-2',
    title: 'Guava (Taiwan Pink)',
    slug: 'guava',
    image: '/Website Images/guava(Hero)/Hero.jpg',
    hoverImages: ['/Website Images/guava(Hero)/Hero.jpg'],
    startingPrice: 120,
    isHybrid: true,
    cropType: 'Fruit'
  },
  {
    _id: 'fb-3',
    title: 'Dragon Fruit (Red/White)',
    slug: 'dragon-fruit',
    image: '/Website Images/Dragon Fruit(Hero)/Hero.jpg',
    hoverImages: ['/Website Images/Dragon Fruit(Hero)/Hero.jpg'],
    startingPrice: 80,
    isHybrid: true,
    cropType: 'Fruit'
  },
  {
    _id: 'fb-4',
    title: 'Kagzi Lemon',
    slug: 'lemon',
    image: '/Website Images/lemon(Hero)/Hero.png',
    hoverImages: ['/Website Images/lemon(Hero)/Hero.png'],
    startingPrice: 100,
    isHybrid: false,
    cropType: 'Fruit'
  },
  {
    _id: 'fb-5',
    title: 'African Mahogany',
    slug: 'mahogany',
    image: '/Website Images/Mahogany/IMG-20221214-WA0002.jpg',
    hoverImages: ['/Website Images/Mahogany/IMG-20221214-WA0002.jpg'],
    startingPrice: 60,
    isHybrid: false,
    cropType: 'Forestry'
  },
  {
    _id: 'fb-6',
    title: 'Apple Ber (Green)',
    slug: 'apple-ber',
    image: '/Website Images/Apple Ber/images (1).jpeg',
    hoverImages: ['/Website Images/Apple Ber/images (1).jpeg'],
    startingPrice: 40,
    isHybrid: true,
    cropType: 'Fruit'
  },
  {
    _id: 'fb-7',
    title: 'Chiku (Kalipatti)',
    slug: 'chiku',
    image: '/Website Images/chiku (Hero)/Hero.jpg',
    hoverImages: ['/Website Images/chiku (Hero)/Hero.jpg'],
    startingPrice: 90,
    isHybrid: false,
    cropType: 'Fruit'
  }
]

async function getFeaturedProducts() {
  const query = `
    *[_type == "product"] | order(_createdAt desc) [0...8] {
      _id,
      title,
      "slug": slug.current,
      "image": images[0].asset->url,
      "hoverImages": images[1..2].asset->url,
      "cropType": cropType,
      "isHybrid": isHybrid,
      "variants": variants[] {
        price,
        stock
      }
    }
  `
  try {
    const products = await client.fetch(query)

    if (!products || products.length === 0) {
      return FALLBACK_PRODUCTS
    }

    // Calculate startingPrice
    return products.map((p: any) => {
      const prices = p.variants?.map((v: any) => v.price) || []
      const minP = prices.length > 0 ? Math.min(...prices) : 0
      return { ...p, startingPrice: minP }
    })
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return FALLBACK_PRODUCTS
  }
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <main className="min-h-screen">
      <NavbarMain />
      <HeroSlider />
      <FeaturesSection />

      {/* Featured Products Section (Blended Shop Style) */}
      <section className="max-w-[1600px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Collection</h2>
            <p className="text-gray-500">Hand-picked best sellers for your farm</p>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-8">
          <HeroProductsCarousel />
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <GoogleReviews />
      <ReviewsOverlapCard />

      <VideoSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

