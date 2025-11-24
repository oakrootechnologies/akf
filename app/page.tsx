import dynamic from 'next/dynamic'
import NavbarMain from '@/components/NavbarMain'
import HeroSlider from '@/components/HeroSlider'
import HeroProductsCarousel from '@/components/HeroProductsCarousel'

// Lazy load components below the fold for better initial load performance
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div className="min-h-[1000px]" />,
})
const TabbedProductGrid = dynamic(() => import('@/components/TabbedProductGrid'), {
  loading: () => <div className="min-h-[600px]" />,
})
const AsymmetricalPromoGrid = dynamic(() => import('@/components/AsymmetricalPromoGrid'), {
  loading: () => <div className="min-h-[400px]" />,
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarMain />
      <HeroSlider />
      <FeaturesSection />
      <TabbedProductGrid />
      <AsymmetricalPromoGrid />
      <GoogleReviews />
      <ReviewsOverlapCard />
      <section className="bg-white py-8 md:py-12 -mt-24">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
          {/* White background section content */}
        </div>
      </section>
      <VideoSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

