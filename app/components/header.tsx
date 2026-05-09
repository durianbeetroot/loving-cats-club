// components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-200 px-6 py-4 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left - Logo */}
        <div className="text-sm font-semibold tracking-wide text-teal-700">
          LOVING CATS CLUB
        </div>

        {/* Right - Navigation */}
        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-teal-700">
          <Link href="/pet-store" className="hover:underline">
            Pet Store
          </Link>
          <Link href="/adoption" className="hover:underline">
            Adoption
          </Link>
          <Link href="/cat-profile" className="hover:underline">
            Cat Profile
          </Link>

          <button className="bg-teal-700 text-white px-4 py-1.5 rounded-md hover:bg-teal-800">
            Log In
          </button>
        </nav>

        {/* Burger Button */}
        {/*REPLACE THIS, THIS IS A TEMPORARY ICON SOLUTION !!!!! */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-teal-700"></span>
          <span className="w-6 h-0.5 bg-teal-700"></span>
          <span className="w-6 h-0.5 bg-teal-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute right-4 top-full mt-2 w-36 bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-4 text-teal-700 text-right z-50">
          <Link href="/pet-store" onClick={() => setIsMenuOpen(false)}>
            Pet Store
          </Link>
          <Link href="/adoption" onClick={() => setIsMenuOpen(false)}>
            Adoption
          </Link>
          <Link href="/cat-profile" onClick={() => setIsMenuOpen(false)}>
            Cat Profile
          </Link>

          <button className="bg-teal-700 text-white px-4 py-2 rounded-md w-full self-end">
            Log In
          </button>
        </nav>
      )}
    </header>
  );
}