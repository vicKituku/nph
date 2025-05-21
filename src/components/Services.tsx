'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Player Management',
    description: 'Comprehensive career guidance, contract negotiations, and professional support for athletes.',
    icon: '🏃‍♂️',
  },
  {
    title: 'Talent Development',
    description: 'Structured training programs and mentorship to nurture emerging football talent.',
    icon: '⭐',
  },
  {
    title: 'Scouting Events',
    description: 'Regular scouting combines and showcase events connecting players with professional clubs.',
    icon: '🎯',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2"
          >
            Our Services
          </motion.h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive solutions for football talent development and professional career management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="heading-3">
                {service.title}
              </h3>
              <p className="text-body">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 