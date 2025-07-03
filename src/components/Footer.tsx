export default function Footer(){

    return(
        <footer className="bg-black py-12">
            <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                <div>
                <a href="/" className="inline-block hover:opacity-80 transition mb-4">
                    <img src="/logo.svg" alt="ProWrites" className="h-30 w-auto" />
                </a>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/prowrites" className="text-[#008080] hover:text-teal-700">
                    <img src="/linkedin.svg" alt="ProWrites" className="h-auto w-auto" />
                    </a>
                    <a href="#" className="text-[#008080] hover:text-teal-700">Twitter</a>
                </div>
                </div>
                <div>
                <h4 className="font-semibold mb-4 text-[#008080]">Solutions</h4>
                <ul className="space-y-2 text-white">
                    <li><a href="#" className="hover:text-[#008080]">Patient Education</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Medical Education</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Clinical Authority</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Digital Health</a></li>
                </ul>
                </div>
                <div>
                <h4 className="font-semibold mb-4 text-[#008080]">Company</h4>
                <ul className="space-y-2 text-white">
                    <li><a href="#" className="hover:text-[#008080]">About Us</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Our Team</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Case Studies</a></li>
                    <li><a href="#" className="hover:text-[#008080]">Careers</a></li>
                </ul>
                </div>
                <div>
                <h4 className="font-semibold mb-4 text-[#008080]">Contact</h4>
                <ul className="space-y-2 text-white">
                    <li>contact@prowrites.io</li>
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