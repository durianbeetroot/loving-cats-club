// components/header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="text-sm font-semibold tracking-wide text-teal-700">
        LOVING CATS CLUB
      </div>

      {/* Right - Navigation */}
      <nav className="flex items-center gap-6 text-sm text-teal-700">
        <Link href="/pet-store" className="hover:underline">
          Pet Store
        </Link>
        <Link href="/adoption" className="hover:underline">
          Adoption
        </Link>
        <Link href="/cat-profile" className="hover:underline">
          Cat Profile
        </Link>

        {/* Login Button */}
        <button className="bg-teal-700 text-white px-4 py-1.5 rounded-md hover:bg-teal-800">
          Log In
        </button>
      </nav>
    </header>
  );
}