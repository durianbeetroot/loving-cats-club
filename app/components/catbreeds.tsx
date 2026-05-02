export default function CatBreeds() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          Cat Breeds
          <span className="block h-1 w-24 bg-pink-400 mt-2"></span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-50">

            <img
                src="/cat_hand.png"
                alt="Cat Paw"
                className="absolute top-0 left-0 w-150 pointer-events-none z-20"
                />
                        
          {/* Left funky image */}
          <div className="w-full">
            <div className="transform -rotate-12 translate-x-1 translate-y-40">
            
            <div className="bg-yellow-400 rounded-lg overflow-hidden">
                <img
                src="/tuxedo.jpg"
                alt="Tuxedo Cat"
                className="w-full h-64 object-cover"
                />
            </div>

            <div className="mt-3 text-sm text-pink-500">
                <h4 className="font-semibold text-teal-700">TUXEDO CAT</h4>
                <p>
                Not a breed but a color pattern. Tuxedo cats are named
                for their stylish black-and-white coats.
                </p>
            </div>

            </div>
        </div>

                {/* Siamese */}
                <div>
                    <div className="bg-yellow-400 rounded-lg overflow-hidden mb-4">
                    <img
                        src="/siamese.jpg" 
                        alt="Siamese Cat"
                        className="w-full h-64 object-cover"
                    />
                    </div>

            <h3 className="text-teal-700 font-semibold mb-2">
              SIAMESE CAT
            </h3>
            <p className="text-pink-500 text-sm leading-relaxed">
              Elegant, slender, and talkative. Siamese cats love human attention
              and often &quot;chat&quot; with their owners.
            </p>
          </div>

          {/* British Shorthair */}
          <div>
            <div className="bg-yellow-400 rounded-lg overflow-hidden mb-4">
              <img
                src="/british-shorthair.jpg" // replace
                alt="British Shorthair Cat"
                className="w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-teal-700 font-semibold mb-2">
              BRITISH SHORTHAIR CAT
            </h3>
            <p className="text-pink-500 text-sm leading-relaxed">
              Stocky, round-faced, commonly solid blue-gray color. These cats
              have easygoing temperament, perfect for chill households.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}