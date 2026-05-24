export default function Footer() {
  return (
    <footer className="bg-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-teal-700 mb-4">
            Loving Cats Club
          </h2>

          <div className="flex space-x-4 text-[#B7677D]">
            {/* Replace with real icons if needed */}
            <a href="#" className="hover:text-[#B7677D]">F</a>
            <a href="#" className="hover:text-[#B7677D]">in</a>
            <a href="#" className="hover:text-[#B7677D]">Y</a>
            <a href="#" className="hover:text-[#B7677D]">IG</a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-[#B7677D]">
            <li><a href="#" className="hover:text-[#B7677D]">Cat Food</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Drink</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Snacks</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-[#B7677D]">
            <li><a href="#" className="hover:text-[#B7677D]">Veterinarian Clinic</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Shelter</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Hotel</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-teal-600 font-medium mb-3">Topic</h3>
          <ul className="space-y-2 text-[#B7677D]">
            <li><a href="#" className="hover:text-[#B7677D]">Cat Photos</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Videos</a></li>
            <li><a href="#" className="hover:text-[#B7677D]">Cat Cat</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}