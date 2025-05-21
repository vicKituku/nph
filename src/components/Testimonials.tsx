'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Victor Omondi',
    role: 'Professional Player',
    image: '/images/testimonial-1.jpg',
    quote: "The training programs and professional guidance helped me secure my first professional contract. The team's expertise is unmatched.",
    rating: 5,
  },
  {
    name: 'Grace Wanjiru',
    role: 'Youth Academy Graduate',
    image: '/images/testimonial-2.jpg',
    quote: 'From academy to professional level, the development programs provided the perfect pathway for my career growth.',
    rating: 5,
  },
  {
    name: 'Peter Mwangi',
    role: 'Parent of Academy Player',
    image: '/images/testimonial-3.jpg',
    quote: "The attention to detail and professional approach to player development is exceptional. My son has grown tremendously.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-2"
          >
            Success Stories
          </motion.h2>
          <p className="text-body max-w-2xl mx-auto">
            Hear from our players and their families about their journey to professional success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="heading-3">{testimonial.name}</h3>
                  <p className="text-small text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-body italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 