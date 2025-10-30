import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OksinGreen - Premium Plants & Trees',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}



