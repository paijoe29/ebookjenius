import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, BookOpen, X } from 'lucide-react'; // Import X icon for close

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "#features", label: "Manfaat" },
    { to: "#prompt-jenius", label: "Ebook Kami" },
    { to: "#cta", label: "Harga" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50">
      {/* Top Promo Bar */}
      <div className="bg-blue-700 text-white text-center text-sm py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">✨ PROMO SPESIAL: Dapatkan Koleksi Lengkap Ebook dengan Harga Terbaik! ✨</span>
          <span className="mx-4">✨ PROMO SPESIAL: Dapatkan Koleksi Lengkap Ebook dengan Harga Terbaik! ✨</span>
          <span className="mx-4">✨ PROMO SPESIAL: Dapatkan Koleksi Lengputih Ebook dengan Harga Terbaik! ✨</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-100 text-gray-900 shadow-md relative"> {/* Added relative positioning */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo or Site Title */}
          <Link to="/" className="flex items-center text-gray-900 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
            <BookOpen className="h-8 w-8 mr-2 text-blue-600" />
            {/* Adjusted font size for mobile to potentially satisfy accessibility tools */}
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Ebook
              <span className="text-blue-600">Jenius</span>
            </span>
          </Link>

          {/* Desktop Navigation Links and Main CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Lihat Koleksi Ebook
            </Button>
          </div>

          {/* Mobile Menu Button and CTA Button */}
          <div className="md:hidden flex items-center space-x-2">
             {/* CTA Button visible on mobile as well, next to hamburger */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm">
              Koleksi Ebook
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="hover:bg-gray-200">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-lg py-2 z-40">
            <div className="container mx-auto px-4 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-2 rounded hover:bg-gray-200"
                  onClick={() => {
                    // Smooth scroll for mobile might need direct handling if react-router hash link isn't smooth enough
                    // For now, just close menu. Browser default behavior for hash links will apply.
                    closeMobileMenu();
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;