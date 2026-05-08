import Link from 'next/link'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GaspachoLand</h3>
            <p className="text-gray-400">
              The ultimate Minecraft roleplay experience with custom mods and an amazing community.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/rules" className="text-gray-400 hover:text-white transition-colors">Rules</Link></li>
              <li><Link href="/mods" className="text-gray-400 hover:text-white transition-colors">Mods</Link></li>
              <li><Link href="/application" className="text-gray-400 hover:text-white transition-colors">Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link href="/participants" className="text-gray-400 hover:text-white transition-colors">Participants</Link></li>
              <li><Link href="/announcements" className="text-gray-400 hover:text-white transition-colors">Announcements</Link></li>
              <li><a href="https://discord.gg/gaspacholand" className="text-gray-400 hover:text-white transition-colors flex items-center"><MessageCircle className="mr-1 h-4 w-4" /> Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 h-4 w-4" />
                admin@gaspacholand.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-2 h-4 w-4" />
                Minecraft Server
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GaspachoLand. All rights reserved. Built with ❤️ for the Minecraft community.</p>
        </div>
      </div>
    </footer>
  )
}