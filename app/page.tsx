'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Shield, Zap, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to GaspachoLand
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            A private Minecraft roleplay server with mods. Join our community and embark on epic adventures!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/application" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </Link>
            <a href="https://discord.gg/gaspacholand" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discord
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Strict Rules</h3>
            <p className="text-gray-600 dark:text-gray-400">Follow our comprehensive rules to ensure a fun and fair environment for all players.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Zap className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Custom Mods</h3>
            <p className="text-gray-600 dark:text-gray-400">Experience Minecraft like never before with our carefully selected mods.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Active Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Join a vibrant community of roleplayers and make lasting friendships.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
