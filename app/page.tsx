import NavbarMain from '@/components/NavbarMain'
import HeroSlider from '@/components/HeroSlider'
import HeroProductsCarousel from '@/components/HeroProductsCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import TabbedProductGrid from '@/components/TabbedProductGrid'
import AsymmetricalPromoGrid from '@/components/AsymmetricalPromoGrid'
import GoogleReviews from '@/components/GoogleReviews'
import LatestUpdates from '@/components/LatestUpdates'
import VideoSection from '@/components/VideoSection'
import FloatingButtons from '@/components/FloatingButtons'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarMain />
      <HeroSlider />
      <HeroProductsCarousel />
      <WhyChooseUs />
      <TabbedProductGrid />
      <AsymmetricalPromoGrid />
      <GoogleReviews />
      <LatestUpdates />
      <VideoSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

