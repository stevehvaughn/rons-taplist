import { Inter } from 'next/font/google'
import './globals.scss'
import Header from './Header/header'
import Footer from './Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Rons Taplist",
  description: "Displaying the beer currently on tap in Ron's garage",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
