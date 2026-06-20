import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Lato, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'


const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Leaf n Roots — Drop of Wellness',
  description:
    'Premium natural wellness extracts made from India\'s finest spices, herbs and botanicals. 100% Natural, Lab Tested, Made in India.',
  keywords: 'herbal extract, wellness, natural ingredients, India, tea extract, ginger, cardamom',
  generator: 'v0.app',
  icons: {
    icon: '/images/lg.png',
    shortcut: '/images/lg.png',
    apple: '/images/lg.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2D5016',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
