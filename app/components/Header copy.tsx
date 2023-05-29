import Link from 'next/link'
import { usePathname } from 'next/navigation';

function Header() {

  let pathname = usePathname();

  return (
    <div className="fixed top-0 w-screen z-30 p-5 drop-shadow-lg bg-blue-100 bg-opacity-95">
      <Link href="#" className="text-gray-100 bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Home</Link>
      <Link href="/news/top" className="text-gray-100 bg-blue-600 hover:bg-blue-900 hover:text-white bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium ml-2">Top</Link>
      <Link href="/news/live/england" className="text-gray-100 bg-blue-600 hover:bg-blue-900 hover:text-white bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium ml-2">England</Link>
      <Link href="/news/live/world" className="text-gray-100 bg-blue-600 hover:bg-blue-900 hover:text-white bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium ml-2">World</Link>

    </div>

  )
}

export default Header
