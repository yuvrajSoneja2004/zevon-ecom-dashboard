import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/utils/provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zevon Dashboard',
  description: 'Dashboard for the Zevon E-Commerce Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
       <div style={{width: '300px'}}> <Sidebar /></div>
        {children}
        </Providers>
      </body>
    </html>
  )
}


