import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">My Website</Link>
        </div>
        <div className="space-x-4">
          <Link href="/home" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header;
