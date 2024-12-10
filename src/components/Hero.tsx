import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Building Your Vision, Exceeding Expectations
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            With over two decades of experience, Bampa Construction delivers excellence
            in commercial and residential construction projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:208-948-5039"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}