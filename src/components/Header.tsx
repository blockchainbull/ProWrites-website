'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <Image src="/logo1.svg" alt="ProWrites" width={120} height={30} priority />
          </Link>

          <div className="flex space-x-6">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center text-white hover:text-[#008080] transition"
                aria-expanded={isDropdownOpen}
              >
                Solutions
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-200 z-50 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                role="menu"
              >
                <div className="py-2">

                  <Link
                    href="/solutions/patient-education"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#F1FFE9] hover:text-[#008080] transition"
                  >
                    <div className="font-semibold">Patient Education</div>
                    <div className="text-sm text-gray-500">Materials that patients understand and follow</div>
                  </Link>

                  <Link
                    href="/solutions/medical-education"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#F1FFE9] hover:text-[#008080] transition"
                  >
                    <div className="font-semibold">Medical Education</div>
                    <div className="text-sm text-gray-500">Professional development for healthcare teams</div>
                  </Link>

                  <Link
                    href="/solutions/clinical-authority"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#F1FFE9] hover:text-[#008080] transition"
                  >
                    <div className="font-semibold">Clinical Authority</div>
                    <div className="text-sm text-gray-500">Evidence-based content for thought leadership</div>
                  </Link>

                  <Link
                    href="/solutions/digital-health-content"
                    className="block px-4 py-3 text-gray-700 hover:bg-[#F1FFE9] hover:text-[#008080] transition"
                  >
                    <div className="font-semibold">Digital Health Content</div>
                    <div className="text-sm text-gray-500">Content for apps, platforms, and digital tools</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-white hover:text-[#008080]">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-[#008080]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
