export default function JoinUs() {
  return (
    <section className="bg-gray-100 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left text */}
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-700">
          Join us Now !
        </h2>

        {/* Right buttons */}
        <div className="flex gap-4">
          <button className="bg-teal-700 text-white px-5 py-2 rounded-md hover:bg-teal-800 transition">
            Log In
          </button>

          <button className="bg-yellow-600 text-gray-900 px-5 py-2 rounded-md hover:bg-yellow-700 transition">
            Sign Up
          </button>
        </div>

      </div>
    </section>
  );
}