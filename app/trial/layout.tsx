import Header from "../components/Header"
import { Inter } from "@next/font/google"

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mt-7">
        {children}
      </div>
    </div>
  )
}
