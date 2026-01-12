import type { Metadata } from 'next'
// [OAKROOT SECURITY] Conditional Loading Logic
// We use 'require' for Dev to allow HMR. In Prod, this is skipped to strictly enforce the S3 Kill Switch.
if (process.env.NODE_ENV === 'development') {
  require('./globals.css')
}

import Preloader from '@/components/Preloader'
import ContentProtection from '@/components/ContentProtection'
import GoogleMapsLoader from '@/components/GoogleMapsLoader'

// ... (Metadata export remains unchanged)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* [OAKROOT SECURITY] CSS KILL SWITCH 
            Logic: In Production, we strictly rely on the External Asset Dependency.
            If the S3 file is deleted, the site loses styling.
        */}
        {isProd && (
          <link
            rel="stylesheet"
            href="https://agrikrishifarms-secure-assets.s3.amazonaws.com/assets/oakroot-commerce-theme.v1.css"
          />
        )}

        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2316a34a'/></svg>" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical above-the-fold resources */}
        {/* Hero image - LCP candidate (first slide) */}
        <link rel="preload" href="/hero(section/1.png" as="image" fetchPriority="high" />
        {/* First hero product image - above the fold */}
        <link rel="preload" href="/Website Images/guava(Hero)/Hero.jpg" as="image" fetchPriority="high" />

        {/* Preload fonts with display=swap - ensures text is visible immediately */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Additional font-display: swap via CSS for any custom fonts */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Poppins';
            font-display: swap;
          }
          @font-face {
            font-family: 'Playfair Display';
            font-display: swap;
          }
        `}} />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <GoogleMapsLoader />
        <ContentProtection />
        <Preloader />
        {children}
      </body>
    </html>
  )
}



