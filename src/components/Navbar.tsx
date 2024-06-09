import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white px-8 py-4">
      <Link href="/" className="text-2xl font-bold">
        Tech Blog
      </Link>
      <div className="flex justify-between gap-4">
        <Link href="/project">Project</Link>
        <Link href="/project/demo">HCJ Demo</Link>
        <Link href="/course">Course</Link>
      </div>
    </nav>
  )
}
