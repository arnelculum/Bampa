import React from 'react';
import { Building2, Home, Factory, Wrench, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Full-service commercial construction with attention to detail and timely delivery.',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom home building and residential projects tailored to your needs.',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    description: 'Specialized construction services for industrial and manufacturing facilities.',
  },
  {
    icon: Wrench,
    title: 'Renovations',
    description: 'Expert renovation services to modernize and enhance your property.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Finishing',
    description: 'High-quality interior finishing work that brings your vision to life.',
  },
  {
    icon: Ruler,
    title: 'Project Planning',
    description: 'Comprehensive project planning and management services.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}