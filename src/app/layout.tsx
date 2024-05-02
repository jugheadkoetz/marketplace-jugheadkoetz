import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { CartProvider } from '@/context/CartContext'
import Footer from '@/components/Footer'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS marketplace',
  description: 'MKS marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <CartProvider>
            <Header />
            {children}
            <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
