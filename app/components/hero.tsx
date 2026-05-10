import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 px-6 py-12 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What is Purring ?
            </h2>

            <p className="mt-4 text-teal-700 max-w-md text-sm leading-relaxed">
              Do you know? Purring is a low-frequency, rhythmic sound that cats
              produce using the muscles in their larynx (voice box). As they
              breathe in and out, these muscles twitch rapidly, causing a
              vibration in the vocal cords that creates the familiar soothing
              hum.
            </p>
          </div>

          {/* Top Right Cat */}
          <div className="relative w-full h-50">
            <Image
              src="/cat-standing.png"
              alt="Standing Cat"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-10 relative w-full h-75 md:h-100 bg-yellow-500 rounded-xl overflow-hidden">
          <Image
            src="/cat-peek.png"
            alt="Cat Peeking"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}