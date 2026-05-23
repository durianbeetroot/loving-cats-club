import Image from "next/image";

export default function YourCat() {
  return (
    <section id="help" className="w-full bg-gray-100 py-12 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your cat will <span className="underline decoration-pink-400">murder</span>{" "}
            <span className="text-yellow-700">you.</span>
          </h1>

          <div className="mt-6 space-y-4 text-sm">
            <p className="text-teal-700 font-medium">This is not a ruse.</p>

            <p className="text-pink-500">
              Your cat will suffocate you at night with their poop stained fur.
              Save yourselves.
            </p>

            <p className="text-teal-700 font-medium mt-4">Feed your cats.</p>

            <p className="text-pink-500">
              Studies shown that by feeding them after you already fed them
              decreases your chance of death.
            </p>

            <p className="text-teal-700 font-medium mt-4">Give up.</p>

            <p className="text-pink-500">
              Forget working, your laptop is theirs. Your couch is theirs. You
              own nothing. You are nothing.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-teal-700 text-white px-4 py-2 rounded-md">
              Call us
            </button>
            <button className="bg-[#B7AB8F] text-white px-4 py-2 rounded-md">
              Get Professional Help
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-130">
          <Image
            src="/yourcat.webp"
            alt="Cat"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}