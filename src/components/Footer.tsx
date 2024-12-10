import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">BAMPA CONSTRUCTION</h3>
            <p className="mb-4 text-sm sm:text-base">
              Building excellence through quality craftsmanship and dedication to our clients' vision.
            </p>
            <p className="text-sm sm:text-base">License #: ABC123456</p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#home" className="hover:text-orange-500">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500">Services</a></li>
              <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
              <li><a href="#about" className="hover:text-orange-500">About</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Contact Info</h3>
            <p className="mb-2 text-sm sm:text-base">Phone: (208) 948-5039</p>
            <p className="mb-2 text-sm sm:text-base">Email: info@bampaconstruction.com</p>
            <p className="text-sm sm:text-base">Boise, Idaho</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Bampa Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}