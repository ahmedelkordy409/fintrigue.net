'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Main', href: '/' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'About Us', href: '/about' },
    { name: 'Advertise With Us', href: '/advertise' },
    { name: 'News', href: '/news' },
    { name: 'Private Investigation', href: '/investigation' },
    { name: 'Whistleblower', href: '/whistleblower' },
  ];

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full" style={{ backgroundColor: 'var(--section-bg)' }}>
      {/* Logo Section */}
      <div className="py-8">
        <div className="text-center">
          <Link href="/" className="inline-block text-black">
            <span className="text-4xl font-black">F</span>
            <span className="text-3xl font-medium tracking-wide">intrigue</span>
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <nav>
        <div className="max-w-[1600px] mx-auto px-12">
          {/* Desktop Navigation */}
          <div className="hidden md:grid grid-cols-7 w-full" style={{ backgroundColor: '#EAE4DC' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-center py-4 text-base font-medium ${
                  isActive(item.href) ? 'bg-[#2B2B2B] text-white' : 'text-[#3F3F46]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex justify-between items-center px-4 py-3">
            <span className="text-sm text-gray-600">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-black"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#D6D3D1]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 text-sm font-medium transition-colors
                    ${isActive(item.href) 
                      ? 'bg-[#2B2B2B] text-white' 
                      : 'bg-transparent text-black hover:bg-gray-100'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div className="w-full border-b mt-4" style={{ borderColor: '#1F2937' }} />
    </header>
  );
};

export default Header;