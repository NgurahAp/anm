"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#whyUs", label: "Why Us?" },
    { href: "#products", label: "Best Product" },
    { href: "#howToOrder", label: "How to Order" },
    { href: "#contactUs", label: "Contact Us" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/landing/navbar_logo.jpg"
              alt="Logo PT Anugrah Niaga Mandiri"
              width={126}
              height={38}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 hover:text-red-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-red-500 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="text-red-500 border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Minta Penawaran
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        } absolute top-24 left-0 right-0 bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="block text-gray-900 hover:text-red-500 px-3 py-3 text-base font-medium border-b border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="#"
              onClick={closeMenu}
              className="block w-full text-center text-red-500 border-2 border-red-500 px-6 py-3 rounded-md text-base font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Minta Penawaran
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
