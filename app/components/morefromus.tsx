import Image from "next/image";

export default function MoreFromUs() {
  return (
    <section id="posts" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 relative inline-block">
          More From Us
          <span className="block h-1 w-32 bg-pink-400 mt-2"></span>
        </h2>

        {/* Scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          
          {/* Card 1 */}
          <div className="min-w-[320px] max-w-[320px] shrink-0">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden w-full h-48">
              <Image
                src="/taking-cat-to-vet.webp"
                className="object-cover"
                fill
                sizes="min-w-[320px] max-w-[320px]"
                alt="Vet Cat"
              />
              {/* right accent line */}
              <div className="absolute right-0 top-0 h-full w-1 bg-pink-400"></div>
            </div>

            <h3 className="mt-4 text-teal-700 font-semibold">
              Why visiting vets cause mass destruction.
            </h3>

            <p className="text-sm text-pink-500 mt-2">
              Studies shown that visiting vets will cause mass deforestation and
              nuclear war. Over 90% of...
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-w-[320px] max-w-[320px] shrink-0">
            <div className="relative rounded-lg overflow-hidden w-full h-48">
              <Image
                src="/cat-bath.webp"
                className="object-cover"
                fill
                sizes="min-w-[320px] max-w-[320px]"
                alt="Wet Cat"
              />
              <div className="absolute right-0 top-0 h-full w-1 bg-pink-400"></div>
            </div>

            <h3 className="mt-4 text-teal-700 font-semibold">
              Top 10 reasons why you shouldn’t bath your cat
            </h3>

            <p className="text-sm text-pink-500 mt-2">
              Water is wet. Water is wet. Water is wet. Water is wet...
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}