import Image from "next/image";


export default function CatBreeds() {
  return (
    <section id="breeds" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          Cat Breeds
          <span className="block h-1 w-24 bg-pink-400 mt-2"></span>
        </h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-50">

          {/* swiping cat paw */}
            <div className="absolute top-0 -left-50 z-10 w-150 h-100">
              <Image
                src="/cat_hand.webp"
                alt="Cat Paw"
                fill
                className="object-contain"
                sizes="300px"
              />
            </div>
                        
          {/* Left funky image */}
          <div className="w-full">
            <div className="transform -rotate-12 translate-x-1 translate-y-40">
            
            <div className="bg-yellow-400 rounded-lg overflow-hidden">
                <div className="relative aspect-4/4 w-full">
                <Image
                  src="/tuxedo.webp"
                  alt="Tuxedo Cat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
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
                      <div className="relative aspect-4/4 w-full">
                    <Image
                        src="/siamese.webp" 
                        alt="Siamese Cat"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />
                    </div>
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
              <div className="relative aspect-4/4 w-full">
              <Image
                src="/british-shorthair.webp" // replace
                alt="British Shorthair Cat"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              </div>
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