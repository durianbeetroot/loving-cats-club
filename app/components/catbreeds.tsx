import Image from "next/image";

const catBreeds = [
  {
    title: "TUXEDO CAT",
    description:
      "Not a breed but a color pattern. Tuxedo cats are named for their stylish black-and-white coats.",
    image: "/tuxedo.webp",
    alt: "Tuxedo Cat",
    funky: true,
  },
  {
    title: "SIAMESE CAT",
    description:
      'Elegant, slender, and talkative. Siamese cats love human attention and often "chat" with their owners.',
    image: "/siamese.webp",
    alt: "Siamese Cat",
  },
  {
    title: "BRITISH SHORTHAIR CAT",
    description:
      "Stocky, round-faced, commonly solid blue-gray color. These cats have easygoing temperament, perfect for chill households.",
    image: "/british-shorthair.webp",
    alt: "British Shorthair Cat",
  },
];

export default function CatBreeds() {
  return (
    <section
      id="breeds"
      className="bg-gray-100 py-16 px-6 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          Cat Breeds
          <span className="block h-1 w-24 bg-pink-400 mt-2"></span>
        </h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start md:pb-50 pb-10">

          {/* swiping cat paw */}
          <div className="absolute -top-20 -left-50 z-10 w-150 h-100">
            <Image
              src="/cat_hand.webp"
              alt="Cat Paw"
              fill
              className="object-contain"
              sizes="300px"
            />
          </div>

          {catBreeds.map((cat, index) => (
            <div
              key={index}
              className="w-full max-w-md md:max-w-none mx-auto"
            >
              
              <div
                className={
                  cat.funky
                    ? "transform -rotate-12 translate-x-1 md:translate-y-40 translate-y-30 pb-40 md:pb-0"
                    : ""
                }
              >
                
                <div className="bg-yellow-400 rounded-lg overflow-hidden mb-4">
                  <div className="relative aspect-4/4 w-full">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-sm text-pink-500">
                  <h3 className="font-semibold text-teal-700 mb-2">
                    {cat.title}
                  </h3>

                  <p className="leading-relaxed">
                    {cat.description}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}