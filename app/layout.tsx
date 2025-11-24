import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oksingreen - Hybrid Plants & Trees',
  description: 'Discover the finest collection of premium plants and trees for your garden. From fruit trees to ornamental plants, we have everything you need.',
  keywords: 'plants, trees, garden, fruit trees, ornamental plants, garden supplies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/instaLOGO.png" type="image/png" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical above-the-fold resources */}
        <link rel="preload" href="/logo/instaLOGO.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/logo/reallogo.png" as="image" fetchPriority="high" />
        {/* Hero image - LCP candidate */}
        <link rel="preload" href="/hero(section/1.png" as="image" fetchPriority="high" />
        
        {/* Preload fonts with display=swap */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
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
        {children}
      </body>
    </html>
  )
}



