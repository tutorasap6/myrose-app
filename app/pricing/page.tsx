'use client';

import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Business Website',
      price: 100,
      period: 'Website',
      description: 'A simple, informative website perfect for small businesses or personal use. Typically includes 1-5 pages, basic design, and contact forms.',
      features: [
        'Consultation and Planning',
        'UI/UX Design - $50 per design',
        'Web Development - $50 per page',
        'Strategy and Marketing',
        'Weekly SEO Content'
      ]
    },
    {
      name: 'Ecommerce Website',
      price: 790,
      period: 'Website',
      description: 'A comprehensive online store with product listings, shopping cart, payment integration, and order management system.',
      features: [
        'Consultation and Planning',
        'UI/UX and Brand Design',
        'Web Development',
        'Payment Integration - Paypal and Stripe',
        'Strategy and Marketing'
      ],
      popular: true
    },
    {
      name: 'Custom Web Application',
      price: 2999,
      period: 'website',
      description: 'Tailored software solutions including SaaS applications, CRM systems, and other custom requirements.',
      features: [
        'Consultation and Planning',
        'UI/UX and Brand Design',
        'Web Development',
        'APIs integration',
        'Testing and Deployment'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            my Price Board
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-600/20 to-pink-600/20 border-2 border-purple-500'
                  : 'bg-gray-800/50'
              } backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <div className="text-4xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                } transition-colors`}
              >
                Start Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 