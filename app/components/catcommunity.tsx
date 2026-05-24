import Image from "next/image";

export default function CatCommunity() {
  const reviews = [
    {
      quote: "Meaw, meaw meaw!",
      name: "Scruffy",
      role: "Regular User",
    },
    {
      quote: "HISSS",
      name: "Princess",
      role: "Web Critique",
    },
    {
      quote: "How splendifious",
      name: "Sir Fluffington",
      role: "Professional Gourmet",
    },
  ];

  return (
    <section id="community" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-teal-700 mb-2">
          Cat Community
        </h2>
        <p className="text-[#B7677D] mb-10">
          The thumbs corresponds to ratings :
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-[#e8e3db] rounded-xl p-6 relative"
            >
              {/* Quote */}
              <p className="text-teal-700 mb-6">
                “{item.quote}”
              </p>

              {/* User */}
              <div>
                <p className="font-semibold text-teal-700 text-sm">
                  {item.name}
                </p>
                <p className="text-[#B7677D] text-xs">
                  {item.role}
                </p>
              </div>

              <Image
                    src="/paws.webp"
                    alt="Paw"
                    width={48}
                    height={48}
                    className="absolute bottom-4 right-4 pointer-events-none"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}