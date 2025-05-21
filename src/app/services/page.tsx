'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Player Management',
    description: 'Comprehensive career guidance and professional support for athletes at every stage of their journey.',
    icon: '🏃‍♂️',
    features: [
      'Contract negotiations and management',
      'Career planning and development',
      'Professional representation',
      'Financial and legal support',
      'Media and brand management'
    ],
    image: '/images/services/player-management.jpg'
  },
  {
    title: 'Talent Development',
    description: 'Structured training programs and mentorship to nurture emerging football talent.',
    icon: '⭐',
    features: [
      'Personalized training programs',
      'Technical and tactical development',
      'Physical conditioning',
      'Mental preparation',
      'Performance analysis'
    ],
    image: '/images/services/talent-development.jpg'
  },
  {
    title: 'Scouting Events',
    description: 'Regular scouting combines and showcase events connecting players with professional clubs.',
    icon: '🎯',
    features: [
      'Professional scouting combines',
      'Club showcase events',
      'International exposure',
      'Performance tracking',
      'Direct club connections'
    ],
    image: '/images/services/scouting-events.jpg'
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-body">
              Comprehensive solutions for football talent development and professional career management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="heading-2 mb-0">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-body">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-body">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
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
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="btn-primary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-2 text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body text-white/90 mb-8"
            >
              Take the first step towards your professional football career with our expert guidance and support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="btn-secondary bg-white text-primary hover:bg-white/90"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 