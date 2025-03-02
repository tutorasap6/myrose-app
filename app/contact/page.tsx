'use client';

import React from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's Talk About Ideas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Address</h2>
                <p className="text-gray-300">Nairobi, Kenya</p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Freelance</h2>
                <p className="text-gray-300">Available Right Now</p>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Email</h2>
                <a 
                  href="mailto:mureithinjagi@ymail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  mureithinjagi@ymail.com
                </a>
              </div>

              <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">Phone</h2>
                <a 
                  href="tel:+254717853515" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  +254 717 - 853 - 515
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Your Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                    * Accept the terms and conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 