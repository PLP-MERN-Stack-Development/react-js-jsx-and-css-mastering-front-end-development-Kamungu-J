import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 dark:border-gray-800 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} Week3App — All rights reserved</div>
      </div>
    </footer>
  )
}
