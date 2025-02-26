import React from 'react';

export default function Home() {
  const stats = [
    {
      number: "5+",
      label: "Years of Experience"
    },
    {
      number: "30",
      label: "Completed Projects"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f1624] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col space-y-12">
          {/* Hero Section */}
          <div className="flex flex-col space-y-4">
            <p className="text-[#8892b0]">Hello, my name is</p>
            <h1 className="text-6xl font-bold">
              Gideon{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
                Mureithi
              </span>
            </h1>
            <h2 className="text-4xl font-semibold text-[#ccd6f6]">
              I develop <span className="text-[#13ADC7]">high-converting</span> websites and custom software for businesses
            </h2>
            <p className="text-xl text-[#8892b0] max-w-2xl">
              I create captivating web applications and technology that transform visitors into loyal customers, fueling your product growth and success.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-[#13ADC7] hover:bg-[#0f8ca3] rounded-full transition-colors"
              >
                Book a call with me
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-[#13ADC7] hover:bg-[#13ADC7]/10 rounded-full transition-colors"
              >
                Long-term contracts available
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 max-w-md">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#13ADC7]">
                  {stat.number}
                </div>
                <div className="text-[#8892b0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* What I Do Section */}
          <section className="pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-[#ccd6f6]">What I Do</h2>
              <p className="text-[#13ADC7] text-xl">my Services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="Full-Stack Web Development"
                subtitle="Front-End & Back-End Development"
                description="Transform your digital presence with my comprehensive web development services. From eye-catching front-end designs to robust back-end solutions, we build responsive and user-friendly websites that drive engagement and conversions."
              />
              <ServiceCard
                title="Custom Software Solutions"
                subtitle="Tailored Software Development"
                description="Unlock the potential of your business with custom software tailored to your unique needs. I create intuitive software applications enhance productivity. Whether it's a SaaS application, an eCommerce platform, or a CRM system, I deliver high-quality, user-centric software."
              />
              <ServiceCard
                title="DevOps & Cloud Consultation"
                subtitle="Scalable Cloud Solutions & CI/CD Solutions"
                description="Accelerate your development lifecycle and optimize your IT infrastructure with my DevOps and Cloud Computing services. I implement continuous integration and continuous deployment pipelines that automate workflows by leveraging AWS cloud solutions."
              />
              <ServiceCard
                title="Payments and APIs integration"
                subtitle="APIs Development"
                description="I integrate various payment gateways, including M-Pesa, Stripe, and PayPal, to provide smooth and secure payment processing for your eCommerce platforms. Additionally, I develop robust APIs that facilitate communication between different software systems."
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-[#112240] hover:bg-[#233554] transition-colors">
      <h3 className="text-2xl font-semibold mb-2 text-[#ccd6f6]">{title}</h3>
      <h4 className="text-[#13ADC7] mb-4">{subtitle}</h4>
      <p className="text-[#8892b0]">{description}</p>
      <a
        href="/pricing"
        className="inline-block mt-4 text-[#13ADC7] hover:text-[#64ffda] transition-colors"
      >
        See Pricing →
      </a>
    </div>
  );
}
