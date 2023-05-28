import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marketplace',
  description: 'Created by Hugo',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
