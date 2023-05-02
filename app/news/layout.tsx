// import "../styles/globals.css";
import Header from "../components/Header"
// import { Inter } from '@next/font/google'
// import { AnalyticsWrapper } from '../components/analytics';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div >
      <Header />
      <div className=" container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 my-7 bg-neutral-50">
        {children}
      </div>
    </div>
  )
}
