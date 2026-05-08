'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function Application() {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    whyJoin: '',
    experience: '',
    rules: false
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to submit application')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Application Submitted!</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Thank you for your application. We'll review it and get back to you soon via email.</p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Back to Home
          </motion.a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Apply to GaspachoLand
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join our exclusive Minecraft roleplay community. Fill out the form below to get started!
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg mb-6 flex items-center"
          >
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label className="block text-gray-700 dark:text-gray-300 font-semibold">Minecraft Username</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </motion.div>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label className="block text-gray-700 dark:text-gray-300 font-semibold">Age</label>
              <input
                type="number"
                required
                min="13"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </motion.div>
          </div>

          <motion.div
            whileFocus={{ scale: 1.01 }}
            className="mb-6 space-y-2"
          >
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.01 }}
            className="mb-6 space-y-2"
          >
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Why do you want to join GaspachoLand?</label>
            <textarea
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
              rows={4}
              value={formData.whyJoin}
              onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.01 }}
            className="mb-6 space-y-2"
          >
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Minecraft/Roleplay Experience</label>
            <textarea
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
              rows={3}
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            />
          </motion.div>

          <motion.div
            className="mb-8"
          >
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={formData.rules}
                onChange={(e) => setFormData({...formData, rules: e.target.checked})}
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                I agree to follow the server rules and community guidelines
              </span>
            </label>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </div>
            ) : (
              'Submit Application'
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}