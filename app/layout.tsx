import "../styles/globals.css";
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
       
          {children}
        
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
