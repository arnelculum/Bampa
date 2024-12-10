import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-gray-900">BAMPA</span>
            <span className="text-orange-600 font-bold">CONSTRUCTION</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:208-948-5039" className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-orange-600">
              <Phone size={20} />
              <span>(208) 948-5039</span>
            </a>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
              <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              <a 
                href="tel:208-948-5039" 
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} />
                <span>(208) 948-5039</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}