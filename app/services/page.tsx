'use client';

import React from 'react';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    subtitle: 'Front-End & Back-End Development',
    description: 'Transform your digital presence with my comprehensive web development services. From eye-catching front-end designs to robust back-end solutions, we build responsive and user-friendly websites that drive engagement and conversions.',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'Database Design & Integration'
    ]
  },
  {
    title: 'Custom Software Solutions',
    subtitle: 'Tailored Software Development',
    description: 'Unlock the potential of your business with custom software tailored to your unique needs. I create intuitive software applications that enhance productivity. Whether it is a SaaS application, an eCommerce platform, or a CRM system, I deliver high-quality, user-centric software.',
    features: [
      'SaaS Application Development',
      'CRM Systems',
      'Business Process Automation',
      'Legacy System Modernization',
      'Custom API Development',
      'Third-party Integrations'
    ]
  },
  {
    title: 'DevOps & Cloud Consultation',
    subtitle: 'Scalable Cloud Solutions & CI/CD Solutions',
    description: 'Accelerate your development lifecycle and optimize your IT infrastructure with my DevOps and Cloud Computing services. I implement continuous integration and continuous deployment pipelines that automate workflows by leveraging AWS cloud solutions.',
    features: [
      'CI/CD Pipeline Setup',
      'Cloud Infrastructure Design',
      'Docker Containerization',
      'Kubernetes Orchestration',
      'AWS Cloud Services',
      'Performance Monitoring'
    ]
  },
  {
    title: 'Payments and APIs Integration',
    subtitle: 'APIs Development',
    description: 'I integrate various payment gateways, including M-Pesa, Stripe, and PayPal, to provide smooth and secure payment processing for your eCommerce platforms. Additionally, I develop robust APIs that facilitate communication between different software systems.',
    features: [
      'Payment Gateway Integration',
      'RESTful API Development',
      'GraphQL API Development',
      'API Documentation',
      'Security Implementation',
      'Performance Optimization'
    ]
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive solutions to help your business thrive in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                  <h3 className="text-purple-400 mb-4">{service.subtitle}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
                  >
                    Get Started
                  </a>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0"
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
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 