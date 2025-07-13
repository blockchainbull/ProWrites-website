// Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="inline-block hover:opacity-80 transition mb-4">
              <Image src="/logo.svg" alt="ProWrites" width={250} height={300} />
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/prowrites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008080] hover:text-teal-700"
              >
                <Image src="/linkedin.svg" alt="LinkedIn" width={60} height={30} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#008080]">Solutions</h4>
            <ul className="space-y-2 text-white">
              <li><Link href="/solutions/patient-education" className="hover:text-[#008080]">Patient Education</Link></li>
              <li><Link href="/solutions/medical-education" className="hover:text-[#008080]">Medical Education</Link></li>
              <li><Link href="/solutions/clinical-authority" className="hover:text-[#008080]">Clinical Authority</Link></li>
              <li><Link href="/solutions/digital-health" className="hover:text-[#008080]">Digital Health</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#008080]">Company</h4>
            <ul className="space-y-2 text-white">
              <li><Link href="/about" className="text-white hover:text-[#008080]">
              About You
            </Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#008080]">Contact</h4>
            <ul className="space-y-2 text-white">
              <li>
                <a href="mailto:contact@prowrites.io" className="hover:text-[#008080] trasition">contact@prowrites.io </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ProWrites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
