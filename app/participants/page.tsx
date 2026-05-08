export default function Participants() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Participants</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Meet the dedicated members of our GaspachoLand community:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-white">Admin Team</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Server Owner: GaspachoMaster</li>
                <li>Lead Admin: RoleplayGuru</li>
                <li>Tech Admin: ModWizard</li>
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded">
              <h3 className="font-semibold text-gray-900 dark:text-white">Active Players</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Our community includes roleplayers, builders, and adventurers from around the world.
                Join us to become part of this growing family!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}