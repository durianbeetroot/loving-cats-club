export default function Footer() {
  return (
    <footer className="bg-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-teal-700 mb-4">
            Loving Cats Club
          </h2>

          <div className="flex space-x-4 text-pink-400">
            {/* Replace with real icons if needed */}
            <a href="#" className="hover:text-pink-600">F</a>
            <a href="#" className="hover:text-pink-600">in</a>
            <a href="#" className="hover:text-pink-600">Y</a>
            <a href="#" className="hover:text-pink-600">IG</a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-pink-400">
            <li><a href="#" className="hover:text-pink-600">Cat Food</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Drink</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Snacks</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-pink-400">
            <li><a href="#" className="hover:text-pink-600">Veterinarian Clinic</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Shelter</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Hotel</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-pink-400">
            <li><a href="#" className="hover:text-pink-600">Cat Photos</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Videos</a></li>
            <li><a href="#" className="hover:text-pink-600">Cat Cat</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}