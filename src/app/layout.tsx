import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fullstack AI Engineer',
  description: 'Jacob Chaffin - Software Engineer | Voice AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={`min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${inter.className}`}>{children}</body>
    </html>
  )
}