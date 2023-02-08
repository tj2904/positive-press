import "../styles/globals.css";
// import "../app/body.css";
import Header from "./Header";
import { Inter } from '@next/font/google'
import { AnalyticsWrapper } from './components/analytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-neutral-50">
        <Header />
        <div className="container mx-auto px-4 mt-16">
        <div className="mt-16 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-700 to-teal-300  text-center font-serif font-extrabold">
          Positive Press
        </div>
        {children}
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
