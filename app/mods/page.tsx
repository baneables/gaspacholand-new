export default function Mods() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Server Mods</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our server uses a curated selection of mods to enhance the gameplay experience. Here are some of the key mods:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Fabric</strong> - Lightweight mod loader for better performance.</li>
            <li><strong>Create</strong> - Factory automation and machinery.</li>
            <li><strong>Botania</strong> - Magical flowers and automation.</li>
            <li><strong>Applied Energistics 2</strong> - Advanced item storage and automation.</li>
            <li><strong>Thermal Expansion</strong> - Industrial processing and machines.</li>
            <li><strong>Quark</strong> - Quality of life improvements and new features.</li>
            <li><strong>Chisel & Bits</strong> - Detailed building and decoration.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            All mods are carefully selected to maintain balance and enhance roleplay opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}