import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import QueryProvider from '@/components/QueryProvider'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ecommerce-frontend',
  description: 'ecommerce-frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ChakraProvider>
          <CartProvider>
            <QueryProvider>
              <Navbar />
              {children}
            </QueryProvider>
          </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
