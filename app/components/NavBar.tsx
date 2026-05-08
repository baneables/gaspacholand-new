import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        GaspachoLand
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/rules" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Rules
        </Link>
        <Link href="/mods" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Mods
        </Link>
        <Link href="/participants" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Participants
        </Link>
        <Link href="/announcements" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Announcements
        </Link>
        <Link href="/application" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Apply
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}