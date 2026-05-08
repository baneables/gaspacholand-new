'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Shield, Zap, MessageCircle, Star, Award, Gamepad2, Crown } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", bounce: 0.4 }}
            className="mb-6"
          >
            <Crown className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Welcome to GaspachoLand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Embark on an epic Minecraft roleplay adventure in our private server with custom mods.
            Join a thriving community of storytellers, builders, and adventurers!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/application" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://discord.gg/gaspacholand" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Strict Rules</h3>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive rules ensure fair play and a positive environment for everyone.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <Zap className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Custom Mods</h3>
            <p className="text-gray-600 dark:text-gray-400">Experience Minecraft like never before with our curated selection of mods.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <Users className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Active Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Join thousands of players in an engaging roleplay community.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <Gamepad2 className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Epic Adventures</h3>
            <p className="text-gray-600 dark:text-gray-400">Create unforgettable stories and embark on legendary quests.</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Why Choose GaspachoLand?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white"
            >
              <Award className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Premium Experience</h3>
              <p>High-performance servers with zero lag and 24/7 uptime guarantee.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl text-white"
            >
              <Star className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Unique Content</h3>
              <p>Custom quests, events, and storylines created by our talented team.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white"
            >
              <Award className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Community Driven</h3>
              <p>Player suggestions shape our server. Your voice matters here.</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
