import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Josefin_Sans, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-sans',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-caps',
})

export const metadata: Metadata = {
  title: 'Azurél — Fine Jewellery · Vienna',
  description: 'Each Azurél piece captures the luminosity of dawn — moissanite, zirconium and 18K gold, crafted in Vienna for women who shine on their own terms.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#F6F2EA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased bg-ivory text-wine-deep overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
