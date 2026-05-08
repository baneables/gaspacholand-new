'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GaspachoLand
            </Link>
          </motion.div>
          <div className="flex items-center space-x-6">
            {[
              { href: '/rules', label: 'Rules' },
              { href: '/mods', label: 'Mods' },
              { href: '/participants', label: 'Participants' },
              { href: '/announcements', label: 'Announcements' },
              { href: '/application', label: 'Apply' }
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}