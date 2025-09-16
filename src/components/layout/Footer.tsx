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
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header with Logo and Social Icons */}
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-3xl font-normal tracking-wide">Fintrigue</h2>

          <div className="flex flex-col items-end">
            <span className="text-sm mb-3">Contacts</span>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-white hover:text-gray-300 transition-colors"
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