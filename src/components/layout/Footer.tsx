import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Main', href: '/' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'About Us', href: '/about' },
    { name: 'Advertise With Us', href: '/advertise' },
    { name: 'News', href: '/news' },
    { name: 'Private Investigation', href: '/investigation' },
    { name: 'Whistleblower', href: '/whistleblower' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Header with Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-wide">Fintrigue</h2>

          <div className="flex flex-col items-center sm:items-end">
            <span className="text-sm mb-2 sm:mb-3">Contacts</span>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6 sm:mb-8"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm text-white hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;