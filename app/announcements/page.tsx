export default function Announcements() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Announcements</h1>
        <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Significant improvements - May 08, 2026</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Posted on May 8, 2026</p>
            <p className="text-gray-700 dark:text-gray-300">
              Creación del servidor y mejora considerable de la web..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
