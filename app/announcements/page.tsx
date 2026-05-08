export default function Announcements() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Announcements</h1>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Server Maintenance - May 10, 2026</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Posted on May 8, 2026</p>
            <p className="text-gray-700 dark:text-gray-300">
              The server will be undergoing maintenance on May 10th from 2-4 PM UTC. Expect some downtime as we update mods and improve performance.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">New Mod Added: Better End</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Posted on May 5, 2026</p>
            <p className="text-gray-700 dark:text-gray-300">
              We've added the Better End mod to enhance the End dimension. Explore new biomes and structures!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Community Event: Roleplay Festival</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Posted on May 1, 2026</p>
            <p className="text-gray-700 dark:text-gray-300">
              Join us for a week-long roleplay festival starting May 15th. Special events, quests, and prizes await!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}