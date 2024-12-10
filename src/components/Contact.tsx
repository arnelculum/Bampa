import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:208-948-5039" className="text-gray-600 hover:text-orange-600">
                  (208) 948-5039
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@bampaconstruction.com" className="text-gray-600 hover:text-orange-600 break-all">
                  info@bampaconstruction.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Boise, Idaho</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: By appointment</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}