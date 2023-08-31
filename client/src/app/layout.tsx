import '@/public/styles/global/global.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Business Manager',
  description: 'Created by sarkis.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <div className="columns has-background-primary-dark" id='main'>
          <Navbar></Navbar>
          {children}
        </div>
        </Providers>
      </body>
    </html>
  )
}
